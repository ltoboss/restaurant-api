"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simple_command_bus_1 = require("simple-command-bus");
class RebootServiceCommand extends simple_command_bus_1.Command {
    constructor(option) {
        super();
        this.service = option;
    }
    getService() {
        return this.service;
    }
}
exports.default = RebootServiceCommand;
//# sourceMappingURL=RebootServiceCommand.js.map