"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const WalkDir_1 = __importDefault(require("../../../Common/WalkDir"));
const SyncEntity_1 = __importDefault(require("../../../../API/Application/Domain/Entities/SyncEntity"));
const SyncEntitiesServices_1 = __importDefault(require("../../../../API/Application/Services/SyncEntities/SyncEntitiesServices"));
const AsyncForeach_1 = __importDefault(require("../../../Common/AsyncForeach"));
const fs = require('fs');
const crypto = require('crypto');
var path = require("path");
class SyncEntitiesHandler {
    constructor() {
        this.syncEntitiesServices = new SyncEntitiesServices_1.default();
    }
    handle(command) {
        return __awaiter(this, void 0, void 0, function* () {
            if (command.getAppName() == undefined) {
                console.error('APP_NAME is required .env file ');
                return Promise.resolve(false);
            }
            dotenv_1.default.config();
            let entitiesFiles = process.env.TYPEORM_ENTITIES_SYNC;
            let entitiesFilesTmp = process.env.TYPEORM_SYNC_OUTPUT;
            let isSyncronizeForce = process.env.MIGRATION_FORCE;
            if (isSyncronizeForce && process.env.MIGRATION_FORCE.toLowerCase() !== 'false') {
                return Promise.resolve(false);
            }
            try {
                if (!fs.existsSync(entitiesFilesTmp)) {
                    fs.mkdirSync(entitiesFilesTmp);
                }
                yield WalkDir_1.default(entitiesFilesTmp, function (modelPath) {
                    return __awaiter(this, void 0, void 0, function* () {
                        yield fs.unlinkSync(modelPath);
                        return Promise.resolve(false);
                    });
                });
                let results = yield this.syncEntitiesServices.getAllWhere({ where: { appName: command.getAppName() } });
                yield WalkDir_1.default(entitiesFiles, function (modelPath) {
                    return __awaiter(this, void 0, void 0, function* () {
                        let data = fs.readFileSync(modelPath, 'utf8');
                        let hash = crypto.createHash('md5').update(data.toString()).digest('hex');
                        modelPath = path.basename(modelPath);
                        modelPath = modelPath.replace(".ts", "");
                        let filterResults = results.filter(entity => entity.name == modelPath);
                        if (filterResults.length > 0) {
                            results = results.map(entity => {
                                if (entity.name == modelPath) {
                                    entity.isUpdated = entity.isUpdated == true ? true : (entity.hash != hash);
                                    entity.hash = hash;
                                }
                                return entity;
                            });
                        }
                        else {
                            let entity = new SyncEntity_1.default();
                            entity.appName = command.getAppName();
                            entity.name = modelPath;
                            entity.hash = hash;
                            entity.isUpdated = true;
                            results.push(entity);
                        }
                    });
                });
                yield AsyncForeach_1.default(Array.from(results), (entity) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        yield this.syncEntitiesServices.store(entity);
                    }
                    catch (e) {
                        console.error('error 72 :', e);
                    }
                }));
                yield AsyncForeach_1.default(Array.from(results), (entity) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        yield fs.writeFileSync(entitiesFilesTmp + entity.name + '.json', JSON.stringify(entity));
                    }
                    catch (e) {
                        console.error('error 81 :', e);
                    }
                }));
            }
            catch (e) {
                console.error('error 90: ', e);
                return Promise.resolve(false);
            }
            return Promise.resolve(true);
        });
    }
}
exports.default = SyncEntitiesHandler;
//# sourceMappingURL=SyncEntitiesHandler.js.map