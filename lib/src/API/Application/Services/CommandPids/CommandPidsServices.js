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
const CommandPid_1 = __importDefault(require("../../Domain/Entities/Command/CommandPid"));
const typeorm_1 = require("typeorm");
class CommandPidsServices {
    constructor() { }
    getByPid(pid) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(CommandPid_1.default);
            return this.repo.findOne({ pid });
        });
    }
    getAlive() {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(CommandPid_1.default);
            return this.repo.findOne({ alive: 1 });
        });
    }
    getToDestroy() {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(CommandPid_1.default);
            return this.repo.find({ softDeleted: 0 });
        });
    }
    store(commandPid) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(CommandPid_1.default);
            return this.repo.save(commandPid);
        });
    }
    turnEverythingOff() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.getConnection()
                .createQueryBuilder()
                .update(CommandPid_1.default)
                .set({ alive: 0 })
                .execute();
        });
    }
    kill(pid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.getConnection()
                .createQueryBuilder()
                .update(CommandPid_1.default)
                .set({ alive: 0, softDeleted: 1 })
                .where("pid = :pid", { pid })
                .execute();
        });
    }
    killAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield typeorm_1.getConnection()
                .createQueryBuilder()
                .update(CommandPid_1.default)
                .set({ alive: 0, softDeleted: 1 })
                .execute();
        });
    }
}
exports.default = CommandPidsServices;
//# sourceMappingURL=CommandPidsServices.js.map