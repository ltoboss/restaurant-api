"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("simple-command-bus/lib/utils");
const simple_command_bus_1 = require("simple-command-bus");
function recursiveFlat(acc, item) {
    if (Array.isArray(item))
        return acc.concat(item.reduce(recursiveFlat, Array()));
    else
        return acc.concat(item);
}
class NamespaceHandlerLocator extends simple_command_bus_1.HandlerLocator {
    constructor(handlersPath = './') {
        super();
        this.basepath = handlersPath;
        if (!handlersPath || !utils_1.isDirectory(handlersPath)) {
            throw new Error('Invalid commands path.');
        }
        this.handlers = utils_1.walkSync(handlersPath).reduce(recursiveFlat, Array());
    }
    getHandlerForCommand(commandName) {
        if (utils_1.isString(commandName) === false) {
            throw new simple_command_bus_1.InvalidCommandException();
        }
        const handlerName = `${commandName.replace(/Command$/, 'Handler')}`;
        const foundHandler = this.handlers.find(handler => handler.match(new RegExp(`(^|/|\\\\)${handlerName}\.(ts|js)$`)));
        if (!foundHandler) {
            simple_command_bus_1.MissingHandlerException.forCommand(commandName);
        }
        const Handler = require(foundHandler).default;
        if (utils_1.isFunction(Handler) === false) {
            simple_command_bus_1.MissingHandlerException.forCommand(commandName);
        }
        return new Handler();
    }
}
exports.default = NamespaceHandlerLocator;
//# sourceMappingURL=NamespaceHandlerLocator.js.map