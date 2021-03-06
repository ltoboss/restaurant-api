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
const Zone_1 = __importDefault(require("../../Domain/Entities/Zone"));
const typeorm_1 = require("typeorm");
class ZoneServices {
    constructor() {
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(Zone_1.default);
            return yield this.repo.createQueryBuilder("zone")
                .leftJoinAndMapMany("zone.tables", "Table", "tables", "tables.zone = zone.id")
                .getMany();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(Zone_1.default);
            const zone = yield this.repo.findOne({ where: { id } });
            if (!zone)
                throw new NotFoundEntityException_1.default(`Zone with id: ${id} not found`);
            return zone;
        });
    }
    getByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(Zone_1.default);
            const zone = yield this.repo.find({ where: { isActive: status } });
            return zone;
        });
    }
    store(zone) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(Zone_1.default);
            return yield this.repo.save(zone);
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(Zone_1.default);
            const zone = yield this.repo.findOne({ where: { id } });
            if (!zone) {
                throw new NotFoundEntityException_1.default(`Zone with id: ${id} not found`);
            }
            const result = yield this.repo.delete(id);
            if (!result && !result.affected) {
                throw new Error(`Zone with id: ${id} cannot be deleted`);
            }
            return result.affected;
        });
    }
}
exports.default = ZoneServices;
//# sourceMappingURL=ZoneServices.js.map