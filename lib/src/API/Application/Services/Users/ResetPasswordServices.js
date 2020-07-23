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
const crypto_1 = __importDefault(require("crypto"));
const UserRepository_1 = __importDefault(require("../../../../Persistence/Repositories/UserRepository"));
const CryptoHashPasswordServices_1 = __importDefault(require("./CryptoHashPasswordServices"));
class ResetPasswordServices {
    constructor() {
        this.userRepository = new UserRepository_1.default();
        this.cryptoServices = new CryptoHashPasswordServices_1.default();
    }
    generateToken(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = crypto_1.default.randomBytes(32).toString('hex');
            user.setResetPasswordToken(token);
            yield this.userRepository.persist(user);
            if (user.hasResetPasswordToken()) {
                return user.getResetPasswordToken();
            }
            return null;
        });
    }
    changePassword(user, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const password = this.cryptoServices.passwordHash(newPassword);
            user.setPassword(password.hash);
            user.setSalt(password.salt);
            user.setResetPasswordToken('');
            return yield this.userRepository.persist(user);
        });
    }
}
exports.default = ResetPasswordServices;
//# sourceMappingURL=ResetPasswordServices.js.map