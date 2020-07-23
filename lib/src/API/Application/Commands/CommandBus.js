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
const SingleInstanceCommand_1 = __importDefault(require("./SingleInstanceCommand"));
const Utils_1 = require("../../Common/Utils");
const CommandAlreadyRunningException_1 = __importDefault(require("../Exceptions/CommandAlreadyRunningException"));
const CommandInstanceServices_1 = __importDefault(require("../Services/CommandInstances/CommandInstanceServices"));
const NamespaceHandlerLocator_1 = __importDefault(require("./NamespaceHandlerLocator"));
const AsyncLoggerMiddleware_1 = __importDefault(require("./AsyncLoggerMiddleware"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const classNameExtractor = new simple_command_bus_1.ClassNameExtractor();
const locator = new NamespaceHandlerLocator_1.default(__dirname + '/../Handlers');
const handlerInflector = new simple_command_bus_1.HandleInflector();
const commandHandlerMiddleware = new simple_command_bus_1.CommandHandlerMiddleware(classNameExtractor, locator, handlerInflector);
class CommandHandlerGate extends simple_command_bus_1.Middleware {
    constructor() {
        super();
    }
    safeExecution(command, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const commandInstanceServices = new CommandInstanceServices_1.default();
            const clean = yield commandInstanceServices.clean();
            const waitingTime = process.env.WAIT_ON_SYNC ? Number(process.env.WAIT_ON_SYNC) : 10000;
            const isRunning = yield command.isRunning();
            if (!isRunning) {
                try {
                    const commandInstance = yield command.createInstance();
                    const watcher = setInterval((_) => __awaiter(this, void 0, void 0, function* () {
                        yield commandInstance.refreshExpirationDate();
                        yield commandInstance.save();
                    }), waitingTime);
                    return next(command)
                        .then((r) => __awaiter(this, void 0, void 0, function* () {
                        clearInterval(watcher);
                        return yield command.removeInstance();
                    }))
                        .catch((e) => __awaiter(this, void 0, void 0, function* () {
                        console.error(command, 'CommandFailed. Removing from DB', e);
                        clearInterval(watcher);
                        return yield command.removeInstance();
                    }));
                }
                catch (e) {
                    console.error('CommandFailed. Removing from DB', e);
                    yield command.removeInstance();
                }
            }
            return false;
        });
    }
    execute(command, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const waitingTime = process.env.WAIT_ON_SYNC ? process.env.WAIT_ON_SYNC : 10000;
            if (command instanceof SingleInstanceCommand_1.default) {
                let safeExecutionResult = yield this.safeExecution(command, next);
                if (safeExecutionResult) {
                    return safeExecutionResult;
                }
                else {
                    yield Utils_1.sleep(waitingTime);
                    safeExecutionResult = yield this.safeExecution(command, next);
                    if (!safeExecutionResult) {
                        throw new CommandAlreadyRunningException_1.default(`${command.constructor.name} is already running, try again later`);
                    }
                }
            }
            else {
                return yield next(command);
            }
        });
    }
}
const stack = Array();
const CommandLogger_1 = __importDefault(require("./CommandLogger"));
stack.push(new AsyncLoggerMiddleware_1.default(console));
stack.push(new CommandLogger_1.default());
stack.push(new CommandHandlerGate());
stack.push(commandHandlerMiddleware);
const commandBus = new simple_command_bus_1.CommandBus(stack);
exports.default = commandBus;
//# sourceMappingURL=CommandBus.js.map