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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let config = JSON.parse(JSON.stringify(database_1.default));
config.entities = database_1.default.entities;
config.synchronize = true;
typeorm_1.createConnection(config).then((conn) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Migration Global Succesfull');
    process.exit();
})).catch((err) => __awaiter(void 0, void 0, void 0, function* () {
    console.error('ERROR @index.ts:createConnection');
    console.error(err);
    process.exit(1);
}));
//# sourceMappingURL=MigrationsGlobal.js.map