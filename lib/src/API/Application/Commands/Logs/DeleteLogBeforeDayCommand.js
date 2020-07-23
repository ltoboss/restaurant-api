"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simple_command_bus_1 = require("simple-command-bus");
class DeleteLogBeforeDayCommand extends simple_command_bus_1.Command {
    constructor(days = 0) {
        super();
        this.days = days;
    }
    getDays() {
        return this.days;
    }
}
exports.default = DeleteLogBeforeDayCommand;
//# sourceMappingURL=DeleteLogBeforeDayCommand.js.map