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
const NotFoundEntityException_1 = __importDefault(require("../../Exceptions/NotFoundEntityException"));
const Log_1 = __importDefault(require("../../Domain/Entities/Log/Log"));
const typeorm_1 = require("typeorm");
class LogServices {
    constructor() {
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logRepository = typeorm_1.getRepository(Log_1.default);
            return yield this.logRepository.find();
        });
    }
    findOne(conditions) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logRepository = typeorm_1.getRepository(Log_1.default);
            return yield this.logRepository.findOne(conditions);
        });
    }
    getBeforeDay(days) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logRepository = typeorm_1.getRepository(Log_1.default);
            let d = new Date();
            d.setDate(d.getDate() - days);
            const dt = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
            const affected = yield this.logRepository.createQueryBuilder()
                .select()
                .where('createdAt < :date', { date: dt })
                .execute();
            return affected;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logRepository = typeorm_1.getRepository(Log_1.default);
            const log = yield this.logRepository.find({ where: { id } });
            if (!log) {
                throw new NotFoundEntityException_1.default(`Log with id: ${id} not found`);
            }
            return log;
        });
    }
    store(log) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logRepository = typeorm_1.getRepository(Log_1.default);
            return yield this.logRepository.save(log);
        });
    }
    update(log) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logRepository = typeorm_1.getRepository(Log_1.default);
            const affected = yield this.logRepository.createQueryBuilder()
                .update(Log_1.default)
                .set(log)
                .where('id = :id', { id: log.getId() })
                .execute();
            return affected;
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logRepository = typeorm_1.getRepository(Log_1.default);
            const affected = yield this.logRepository.delete(id);
            return affected;
        });
    }
    destoyBeforeDay(days) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logRepository = typeorm_1.getRepository(Log_1.default);
            let d = new Date();
            d.setDate(d.getDate() - days);
            const dt = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
            const affected = yield this.logRepository.createQueryBuilder()
                .delete()
                .from(Log_1.default)
                .where('createdAt < :date', { date: dt })
                .execute();
            return affected;
        });
    }
}
exports.default = LogServices;
//# sourceMappingURL=LogServices.js.map