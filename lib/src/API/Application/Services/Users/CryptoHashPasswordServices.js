'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class CryptoHashPasswordServices {
    passwordHash(password) {
        const salt = crypto_1.default.randomBytes(16).toString('hex');
        const hash = crypto_1.default.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
        return {
            hash,
            salt,
        };
    }
    validPassword(hashSaved, salt, password) {
        const hash = crypto_1.default.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
        return hash === hashSaved;
    }
}
exports.default = CryptoHashPasswordServices;
//# sourceMappingURL=CryptoHashPasswordServices.js.map