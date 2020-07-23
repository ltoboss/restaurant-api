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
const typeorm_1 = require("typeorm");
const RebootServiceCommand_1 = __importDefault(require("../API/Application/Commands/CommandPids/RebootServiceCommand"));
const database_1 = __importDefault(require("../API/Config/database"));
const CommandBus_1 = __importDefault(require("../API/Application/Commands/CommandBus"));
dotenv_1.default.config();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        if (process.argv.length > 2) {
            switch (process.argv[2].toLocaleLowerCase()) {
                case 'all':
                    yield CommandBus_1.default.handle(new RebootServiceCommand_1.default('server'));
                    yield CommandBus_1.default.handle(new RebootServiceCommand_1.default('sync'));
                    break;
                case 'server':
                    yield CommandBus_1.default.handle(new RebootServiceCommand_1.default('server'));
                    break;
                case 'sync':
                    yield CommandBus_1.default.handle(new RebootServiceCommand_1.default('sync'));
                    break;
            }
        }
    });
}
typeorm_1.createConnection(database_1.default).then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield main();
    process.exit(0);
})).catch((err) => {
    console.error('ERROR @index.ts:createConnection');
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=reboot.js.map