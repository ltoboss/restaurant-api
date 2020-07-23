"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const argv = require('yargs').argv;
dotenv.config();
const dbUsername = argv.test ? process.env.TYPEORM_USERNAME_TEST : process.env.TYPEORM_USERNAME;
const dbPassword = argv.test ? process.env.TYPEORM_PASSWORD_TEST : process.env.TYPEORM_PASSWORD;
const dbName = argv.test ? process.env.TYPEORM_DATABASE_TEST : process.env.TYPEORM_DATABASE;
const database = {
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST || 'localhost',
    port: Number(process.env.TYPEORM_PORT) || 3306,
    name: 'default',
    username: dbUsername || 'user',
    password: dbPassword || 'pass',
    database: dbName || 'db',
    synchronize: false,
    logging: false,
    entityPrefix: process.env.TYPEORM_ENTITY_PREFIX || 'krack_',
    connectTimeout: 60000,
    acquireTimeout: 60 * 60 * 1000,
    entities: [
        'lib/src/API/Application/Domain/Entities/**/*.js',
    ],
};
exports.default = database;
//# sourceMappingURL=database.js.map