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
const database_1 = __importDefault(require("../API/Config/database"));
const typeorm_1 = require("typeorm");
typeorm_1.createConnection(database_1.default).then(() => __awaiter(void 0, void 0, void 0, function* () {
    const argv = require('yargs').argv;
    const dbName = argv.test ? process.env.TYPEORM_DATABASE_TEST : process.env.TYPEORM_DATABASE;
    yield typeorm_1.getManager().transaction((manager) => __awaiter(void 0, void 0, void 0, function* () {
        yield manager.query(`DELETE FROM ${dbName}.krack_command_instance;`);
    }));
    process.exit(0);
})).catch((err) => {
    console.error('ERROR @index.ts:createConnection');
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=execsql.js.map