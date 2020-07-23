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
exports.recconectDatabase = exports.dropDataByTableName = exports.dropDataEntity = void 0;
const database_1 = __importDefault(require("../../../API/Config/database"));
const typeorm_1 = require("typeorm");
require("reflect-metadata");
let config = JSON.parse(JSON.stringify(database_1.default));
config.entities = database_1.default.entities;
config.synchronize = true;
function getEntities(connection) {
    return __awaiter(this, void 0, void 0, function* () {
        const entities = [];
        connection.entityMetadatas.forEach(x => {
            entities.push({ name: x.name, tableName: x.tableName });
        });
        return entities;
    });
}
function dropDataEntity(entity) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield typeorm_1.getConnection();
            const entities = yield getEntities(conn);
            entity = entities.filter(x => x.name == entity)[0];
            const repository = yield conn.getRepository(entity.name);
            yield repository.query(`SET FOREIGN_KEY_CHECKS = 0 ;`);
            yield repository.query(`TRUNCATE TABLE ${entity.tableName};`);
            console.log(`Truncate table ${entity.tableName};`);
        }
        catch (error) {
            throw new Error(`ERROR: Cleaning test db: ${error}`);
        }
    });
}
exports.dropDataEntity = dropDataEntity;
function dropDataByTableName(tableName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield typeorm_1.getConnection();
            const repository = yield conn;
            yield repository.query(`SET FOREIGN_KEY_CHECKS = 0 ;`);
            yield repository.query(`TRUNCATE TABLE ${tableName};`);
        }
        catch (error) {
            throw new Error(`ERROR: Cleaning test db: ${error}`);
        }
    });
}
exports.dropDataByTableName = dropDataByTableName;
function recconectDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        yield typeorm_1.getConnection().close();
        return yield typeorm_1.createConnection(config);
    });
}
exports.recconectDatabase = recconectDatabase;
//# sourceMappingURL=DropDataEntity.js.map