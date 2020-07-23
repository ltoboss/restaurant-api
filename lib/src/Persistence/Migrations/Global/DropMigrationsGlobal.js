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
const database_1 = __importDefault(require("../../../API/Config/database"));
const typeorm_1 = require("typeorm");
require("reflect-metadata");
let config = JSON.parse(JSON.stringify(database_1.default));
config.entities = database_1.default.entities;
config.synchronize = true;
typeorm_1.createConnection(config).then((conn) => __awaiter(void 0, void 0, void 0, function* () {
    yield getEntities(conn);
    console.log('Migration Global Succesfull');
    process.exit();
})).catch((err) => {
    console.error('ERROR @index.ts:createConnection');
    console.error(err);
    process.exit(1);
});
function getEntities(connection) {
    return __awaiter(this, void 0, void 0, function* () {
        const entities = [];
        connection.entityMetadatas.forEach(x => {
            entities.push({ name: x.name, tableName: x.tableName });
        });
        yield dropEntities(connection, entities);
    });
}
function dropEntities(conection, entities) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            for (const entity of entities) {
                const repository = yield conection.getRepository(entity.name);
                yield repository.query(`SET FOREIGN_KEY_CHECKS = 0 ;`);
                yield repository.query(`DROP TABLE IF EXISTS ${entity.tableName};`);
            }
        }
        catch (error) {
            throw new Error(`ERROR: Cleaning test db: ${error}`);
        }
    });
}
//# sourceMappingURL=DropMigrationsGlobal.js.map