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
const CommandInstance_1 = __importDefault(require("../../Domain/Entities/Command/CommandInstance"));
const typeorm_1 = require("typeorm");
class CommandInstanceServices {
    constructor() {
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            this.commandInstanceRepository = typeorm_1.getRepository(CommandInstance_1.default);
            return yield this.commandInstanceRepository.createQueryBuilder()
                .delete()
                .where([
                { pid: process.pid },
                { expirationDate: typeorm_1.LessThan(new Date()) }
            ])
                .execute();
        });
    }
    clean() {
        return __awaiter(this, void 0, void 0, function* () {
            this.commandInstanceRepository = typeorm_1.getRepository(CommandInstance_1.default);
            return yield this.commandInstanceRepository.createQueryBuilder()
                .delete()
                .where({ expirationDate: typeorm_1.LessThan(new Date()) })
                .execute();
        });
    }
    find(options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.commandInstanceRepository = typeorm_1.getRepository(CommandInstance_1.default);
            return yield this.commandInstanceRepository.find(options);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            this.commandInstanceRepository = typeorm_1.getRepository(CommandInstance_1.default);
            return yield this.commandInstanceRepository.find();
        });
    }
    findOne(conditions) {
        return __awaiter(this, void 0, void 0, function* () {
            this.commandInstanceRepository = typeorm_1.getRepository(CommandInstance_1.default);
            return yield this.commandInstanceRepository.findOne(conditions);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.commandInstanceRepository = typeorm_1.getRepository(CommandInstance_1.default);
            const commandInstance = yield this.commandInstanceRepository.find({ where: { id } });
            if (!commandInstance) {
                throw new NotFoundEntityException_1.default(`CommandInstance with id: ${id} not found`);
            }
            return commandInstance;
        });
    }
    store(commandInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            this.commandInstanceRepository = typeorm_1.getRepository(CommandInstance_1.default);
            return yield this.commandInstanceRepository.save(commandInstance);
        });
    }
    update(commandInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            this.commandInstanceRepository = typeorm_1.getRepository(CommandInstance_1.default);
            const affected = yield this.commandInstanceRepository.createQueryBuilder()
                .update(CommandInstance_1.default)
                .set(commandInstance)
                .where('id = :id', { id: commandInstance.getId() })
                .execute();
            return affected;
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.commandInstanceRepository = typeorm_1.getRepository(CommandInstance_1.default);
            const affected = yield this.commandInstanceRepository.delete(id);
            return affected;
        });
    }
}
exports.default = CommandInstanceServices;
//# sourceMappingURL=CommandInstanceServices.js.map