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
exports.existModel = void 0;
const SyncEntity_1 = __importDefault(require("../../API/Application/Domain/Entities/SyncEntity"));
const typeorm_1 = require("typeorm");
const fs = require('fs');
const crypto = require('crypto');
var path = require("path");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let entitiesFiles = process.env.TYPEORM_ENTITIES_SYNC;
let entitiesFilesTmp = process.env.TYPEORM_SYNC_OUTPUT;
function existModel(modelPath) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = fs.readFileSync(modelPath, 'utf8');
        modelPath = path.basename(modelPath);
        modelPath = modelPath.replace(".ts", "");
        let hash = crypto.createHash('md5').update(data.toString()).digest('hex');
        let entity = new SyncEntity_1.default();
        entity.hash = hash;
        entity.name = modelPath;
        let results = [];
        try {
            results = yield typeorm_1.getConnection().getRepository(SyncEntity_1.default).createQueryBuilder('s').where("s.name = :name ", { name: modelPath }).execute();
        }
        catch ($e) {
            entity.isUpdated = SyncEntity_1.default.name == modelPath;
            return Promise.resolve(entity);
        }
        if (results.length == 0) {
            entity.isUpdated = true;
        }
        else {
            let result = results[0];
            entity.id = result.s_id;
            if (result.s_hash != hash) {
                entity.isUpdated = true;
            }
            else {
                entity.isUpdated = false;
            }
        }
        yield typeorm_1.getConnection().manager.save(entity);
        return Promise.resolve(entity);
    });
}
exports.existModel = existModel;
exports.default = existModel;
//# sourceMappingURL=EntitiesMigration.js.map