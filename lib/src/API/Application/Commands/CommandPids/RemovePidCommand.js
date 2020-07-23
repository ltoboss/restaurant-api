"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simple_command_bus_1 = require("simple-command-bus");
class RemovePidCommand extends simple_command_bus_1.Command {
    constructor(option) {
        super();
        this.service = option || 'server';
    }
    getService() {
        return this.service;
    }
}
exports.default = RemovePidCommand;
//# sourceMappingURL=RemovePidCommand.js.map