"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSingleLog = void 0;
const simple_command_bus_1 = require("simple-command-bus");
class GetSingleLog {
}
exports.GetSingleLog = GetSingleLog;
class GetSingleLogCommand extends simple_command_bus_1.Command {
    constructor(id) {
        super();
        this.id = id;
    }
    getId() {
        return this.id;
    }
}
exports.default = GetSingleLogCommand;
//# sourceMappingURL=GetSingleLogCommand.js.map