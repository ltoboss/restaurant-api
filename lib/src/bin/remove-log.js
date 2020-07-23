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
const CommandBus_1 = __importDefault(require("../API/Application/Commands/CommandBus"));
const dotenv_1 = __importDefault(require("dotenv"));
const DeleteLogBeforeDayCommand_1 = __importDefault(require("../API/Application/Commands/Logs/DeleteLogBeforeDayCommand"));
const database_1 = __importDefault(require("../API/Config/database"));
const typeorm_1 = require("typeorm");
dotenv_1.default.config();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        if (process.argv.length > 2) {
            let days = Number(process.argv[2]);
            yield CommandBus_1.default.handle(new DeleteLogBeforeDayCommand_1.default(days));
        }
        else {
            yield CommandBus_1.default.handle(new DeleteLogBeforeDayCommand_1.default(0));
        }
    });
}
typeorm_1.createConnection(database_1.default).then((conn) => __awaiter(void 0, void 0, void 0, function* () {
    yield main();
    process.exit(0);
})).catch((err) => {
    console.error('ERROR @index.ts:createConnection');
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=remove-log.js.map