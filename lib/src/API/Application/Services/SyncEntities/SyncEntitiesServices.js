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
const SyncEntity_1 = __importDefault(require("../../Domain/Entities/SyncEntity"));
const typeorm_1 = require("typeorm");
class SyncEntitiesServices {
    constructor() {
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            this.syncEntityRepository = typeorm_1.getRepository(SyncEntity_1.default);
            return yield this.syncEntityRepository.find();
        });
    }
    getAllWhere(conditions) {
        return __awaiter(this, void 0, void 0, function* () {
            this.syncEntityRepository = typeorm_1.getRepository(SyncEntity_1.default);
            return yield this.syncEntityRepository.find(conditions);
        });
    }
    findOne(conditions) {
        return __awaiter(this, void 0, void 0, function* () {
            this.syncEntityRepository = typeorm_1.getRepository(SyncEntity_1.default);
            return yield this.syncEntityRepository.findOne(conditions);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.syncEntityRepository = typeorm_1.getRepository(SyncEntity_1.default);
            const sync = yield this.syncEntityRepository.find({ where: { id } });
            if (!sync) {
                throw new NotFoundEntityException_1.default(`SynEntity with id: ${id} not found`);
            }
            return sync;
        });
    }
    store(sync) {
        return __awaiter(this, void 0, void 0, function* () {
            this.syncEntityRepository = typeorm_1.getRepository(SyncEntity_1.default);
            return yield this.syncEntityRepository.save(sync);
        });
    }
    update(sync) {
        return __awaiter(this, void 0, void 0, function* () {
            this.syncEntityRepository = typeorm_1.getRepository(SyncEntity_1.default);
            const affected = yield this.syncEntityRepository.createQueryBuilder()
                .update(SyncEntity_1.default)
                .set(sync)
                .where('id = :id', { id: sync.getId() })
                .execute();
            return affected;
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.syncEntityRepository = typeorm_1.getRepository(SyncEntity_1.default);
            const affected = yield this.syncEntityRepository.delete(id);
            return affected;
        });
    }
}
exports.default = SyncEntitiesServices;
//# sourceMappingURL=SyncEntitiesServices.js.map