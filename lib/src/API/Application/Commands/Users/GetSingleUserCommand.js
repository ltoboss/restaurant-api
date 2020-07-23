"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSingleUser = void 0;
const simple_command_bus_1 = require("simple-command-bus");
class GetSingleUser {
}
exports.GetSingleUser = GetSingleUser;
class GetSingleUserCommand extends simple_command_bus_1.Command {
    constructor(id) {
        super();
        this.id = id;
    }
    getId() {
        return this.id;
    }
}
exports.default = GetSingleUserCommand;
//# sourceMappingURL=GetSingleUserCommand.js.map