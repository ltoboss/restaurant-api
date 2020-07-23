"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSyncEntities = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const fs = require('fs');
function isSyncEntities(classEntities) {
    try {
        dotenv_1.default.config();
        let isSyncronizeForce = process.env.MIGRATION_FORCE || true;
        if (isSyncronizeForce) {
            return true;
        }
        let entitiesFilesTmp = process.env.TYPEORM_SYNC_OUTPUT;
        let data = fs.readFileSync(entitiesFilesTmp + classEntities.name + ".json", 'utf8');
        let obj = JSON.parse(data);
        return (obj.isUpdated == true || obj.isUpdated == undefined);
    }
    catch (e) {
        if (classEntities.name == 'SyncEntity') {
            return true;
        }
        return false;
    }
}
exports.isSyncEntities = isSyncEntities;
exports.default = isSyncEntities;
//# sourceMappingURL=isSyncEntities.js.map