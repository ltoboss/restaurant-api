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
const User_1 = __importDefault(require("../../API/Application/Domain/Entities/User/User"));
const typeorm_1 = require("typeorm");
class UserRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(User_1.default);
            return yield this.repo.find();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(User_1.default);
            return yield this.repo.findOne(id);
        });
    }
    findByToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(User_1.default);
            return yield this.repo.findOne({ resetPasswordToken: token });
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(User_1.default);
            return yield this.repo.findOne({ email });
        });
    }
    find(conditions) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(User_1.default);
            return yield this.repo.find(conditions);
        });
    }
    persist(user) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(User_1.default);
            return yield this.repo.save(user);
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(User_1.default);
            return yield this.repo.delete(id);
        });
    }
}
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map