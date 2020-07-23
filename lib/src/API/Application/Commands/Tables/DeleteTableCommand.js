"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simple_command_bus_1 = require("simple-command-bus");
class DeleteTableCommand extends simple_command_bus_1.Command {
    constructor(id) {
        super();
        this.id = id;
    }
    getId() {
        return this.id;
    }
}
exports.default = DeleteTableCommand;
//# sourceMappingURL=DeleteTableCommand.js.map