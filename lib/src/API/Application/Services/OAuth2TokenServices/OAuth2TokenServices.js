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
const OAuth2Token_1 = __importDefault(require("../../Domain/Entities/OAuth2Token"));
const User_1 = __importDefault(require("../../Domain/Entities/User/User"));
const CryptoHashPasswordServices_1 = __importDefault(require("../Users/CryptoHashPasswordServices"));
const NotFoundEntityException_1 = __importDefault(require("../../Exceptions/NotFoundEntityException"));
module.exports.getAccessToken = function (bearerToken) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield OAuth2Token_1.default.findOne({ where: { accessToken: bearerToken }, relations: ['user'] });
    });
};
module.exports.getUser = function (username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const cryptoService = new CryptoHashPasswordServices_1.default();
        const user = yield User_1.default.findOne({ where: { email: username } });
        if (!user) {
            return false;
        }
        const isValidUser = cryptoService.validPassword(user.getPassword(), user.getSalt(), password);
        if (isValidUser) {
            return user;
        }
        else {
            return false;
        }
    });
};
module.exports.saveToken = function (token, user) {
    return __awaiter(this, void 0, void 0, function* () {
        token.user = user;
        const oAuth2Token = new OAuth2Token_1.default(token);
        yield oAuth2Token.save();
        return oAuth2Token;
    });
};
module.exports.revokeToken = function (token, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        yield token.remove();
        return callback(undefined, true);
    });
};
module.exports.getRefreshToken = function (refreshToken, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield OAuth2Token_1.default.findOne({ where: { refreshToken }, relations: ['client', 'user'] })
            .then((res) => {
            if (res)
                callback(undefined, res);
            else
                callback(new NotFoundEntityException_1.default('Unauthorized refresh token'));
        })
            .catch((err) => { console.error(err); return callback(err); });
    });
};
//# sourceMappingURL=OAuth2TokenServices.js.map