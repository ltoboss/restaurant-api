"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SingleInstanceCommand_1 = __importDefault(require("../SingleInstanceCommand"));
class SyncEntitiesClearCommand extends SingleInstanceCommand_1.default {
    constructor(appName) {
        super();
        this.appName = appName;
    }
    getAppName() {
        return this.appName;
    }
}
exports.default = SyncEntitiesClearCommand;
//# sourceMappingURL=SyncEntitiesClearCommand.js.map