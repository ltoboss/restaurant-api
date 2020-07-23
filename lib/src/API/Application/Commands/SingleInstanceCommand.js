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
const simple_command_bus_1 = require("simple-command-bus");
const CommandInstance_1 = __importDefault(require("../Domain/Entities/Command/CommandInstance"));
const CommandInstanceServices_1 = __importDefault(require("../Services/CommandInstances/CommandInstanceServices"));
class SingleInstanceCommand extends simple_command_bus_1.Command {
    constructor() {
        super();
        this.commandInstanceServices = new CommandInstanceServices_1.default();
        this.commandInstanceServices = new CommandInstanceServices_1.default();
    }
    isRunning() {
        return __awaiter(this, void 0, void 0, function* () {
            const commandInstance = yield this.commandInstanceServices.findOne({ command: this.constructor.name });
            return !!commandInstance;
        });
    }
    createInstance() {
        return __awaiter(this, void 0, void 0, function* () {
            const commandInstance = new CommandInstance_1.default({
                pid: process.pid,
                command: this.constructor.name,
                expirationDate: `CURRENT_TIMESTAMP`
            });
            return yield commandInstance.save();
        });
    }
    removeInstance() {
        return __awaiter(this, void 0, void 0, function* () {
            const commandInstance = yield this.commandInstanceServices.findOne({ command: this.constructor.name });
            return yield commandInstance.remove();
        });
    }
}
exports.default = SingleInstanceCommand;
//# sourceMappingURL=SingleInstanceCommand.js.map