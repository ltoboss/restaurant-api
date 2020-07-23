"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSingleCommandInstance = void 0;
const simple_command_bus_1 = require("simple-command-bus");
class GetSingleCommandInstance {
}
exports.GetSingleCommandInstance = GetSingleCommandInstance;
class GetSingleCommandInstanceCommand extends simple_command_bus_1.Command {
    constructor(id) {
        super();
        this.id = id;
    }
    getId() {
        return this.id;
    }
}
exports.default = GetSingleCommandInstanceCommand;
//# sourceMappingURL=GetSingleCommandInstanceCommand.js.map