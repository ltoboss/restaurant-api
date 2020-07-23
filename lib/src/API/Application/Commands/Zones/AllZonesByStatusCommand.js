"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSingleUser = void 0;
const simple_command_bus_1 = require("simple-command-bus");
class GetSingleUser {
}
exports.GetSingleUser = GetSingleUser;
class AllZonesByStatusCommand extends simple_command_bus_1.Command {
    constructor(status) {
        super();
        this.status = status;
    }
    getStatus() {
        return this.status;
    }
}
exports.default = AllZonesByStatusCommand;
//# sourceMappingURL=AllZonesByStatusCommand.js.map