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
const SyncEntitiesServices_1 = __importDefault(require("../../../../API/Application/Services/SyncEntities/SyncEntitiesServices"));
const AsyncForeach_1 = __importDefault(require("../../../Common/AsyncForeach"));
const fs = require('fs');
const crypto = require('crypto');
var path = require("path");
class SyncEntitiesClearHandler {
    constructor() {
        this.syncEntitiesServices = new SyncEntitiesServices_1.default();
    }
    handle(command) {
        return __awaiter(this, void 0, void 0, function* () {
            dotenv_1.default.config();
            let entitiesFiles = process.env.TYPEORM_ENTITIES_SYNC;
            let entitiesFilesTmp = process.env.TYPEORM_SYNC_OUTPUT;
            if (!fs.existsSync(entitiesFilesTmp)) {
                fs.mkdirSync(entitiesFilesTmp);
            }
            yield WalkDir_1.default(entitiesFilesTmp, function (modelPath) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield fs.unlinkSync(modelPath);
                    return Promise.resolve(false);
                });
            });
            try {
                let results = yield this.syncEntitiesServices.getAllWhere({ where: { appName: command.getAppName() } });
                yield AsyncForeach_1.default(Array.from(results), (entity) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        yield this.syncEntitiesServices.destroy(entity.id);
                    }
                    catch (e) {
                        console.error('error 42 :', e);
                    }
                }));
            }
            catch (e) {
                console.error('error 45', e);
            }
            return Promise.resolve(true);
        });
    }
}
exports.default = SyncEntitiesClearHandler;
//# sourceMappingURL=SyncEntitiesClearHandler.js.map