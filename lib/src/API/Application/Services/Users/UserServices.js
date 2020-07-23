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
const User_1 = __importDefault(require("../../Domain/Entities/User/User"));
const UserRepository_1 = __importDefault(require("../../../../Persistence/Repositories/UserRepository"));
const typeorm_1 = require("typeorm");
class UserServices {
    constructor() {
        this.userRepository = new UserRepository_1.default();
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(User_1.default);
            return yield this.repo.find({ relations: ['roles'], order: { id: "ASC" } });
        });
    }
    getAllUsersRolesWarehouse() {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(User_1.default);
            return yield this.repo.find({ relations: ['roles'], order: { id: "ASC" } });
        });
    }
    getById(id, exception = false) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(User_1.default);
            const user = yield this.repo.findOne({ where: { id }, relations: ['roles'] });
            if (!user && !exception) {
                throw new NotFoundEntityException_1.default(`User with id: ${id} not found`);
            }
            return user;
        });
    }
    store(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.persist(user);
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findById(id);
            if (!user) {
                throw new NotFoundEntityException_1.default(`User with id: ${id} not found`);
            }
            const result = yield this.userRepository.destroy(id);
            if (!result && !result.affected) {
                throw new Error(`User with id: ${id} cannot be deleted`);
            }
            return result.affected;
        });
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findByEmail(email);
            return user;
        });
    }
    getByToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findByToken(token);
            if (!user) {
                throw new NotFoundEntityException_1.default(`User with token: ${token} not found`);
            }
            return user;
        });
    }
}
exports.default = UserServices;
//# sourceMappingURL=UserServices.js.map