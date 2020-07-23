"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPids = void 0;
const CommandPid_1 = __importDefault(require("../Application/Domain/Entities/Command/CommandPid"));
const CommandPidsServices_1 = __importDefault(require("../Application/Services/CommandPids/CommandPidsServices"));
function registerPids(pid) {
    return __awaiter(this, void 0, void 0, function* () {
        let commandPid;
        const commandPidServices = new CommandPidsServices_1.default();
        const pidExist = yield commandPidServices.getByPid(pid);
        if (!pidExist) {
            yield commandPidServices.turnEverythingOff();
            commandPid = new CommandPid_1.default();
            commandPid.setPid(pid);
            commandPid.setAlive(1);
            commandPid.setSoftDeleted(0);
        }
        else {
            commandPid = new CommandPid_1.default(pidExist);
            commandPid.setUpdatedAt();
        }
        yield commandPidServices.store(commandPid);
    });
}
exports.registerPids = registerPids;
;
exports.default = registerPids;
//# sourceMappingURL=RegisterPids.js.map