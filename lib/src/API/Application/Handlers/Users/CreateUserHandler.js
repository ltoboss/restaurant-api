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
const User_1 = __importDefault(require("../../Domain/Entities/User/User"));
const UserServices_1 = __importDefault(require("../../Services/Users/UserServices"));
const CryptoHashPasswordServices_1 = __importDefault(require("../../Services/Users/CryptoHashPasswordServices"));
const InvalidArgumentException_1 = __importDefault(require("../../Exceptions/InvalidArgumentException"));
class CreateUserHandler {
    constructor() {
        this.userServices = new UserServices_1.default();
        this.cryptoHashPasswordServices = new CryptoHashPasswordServices_1.default();
    }
    handle(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.parse(JSON.stringify(command));
            const { warehouseId, createPermissions } = data;
            delete data.warehouseId;
            delete data.createPermissions;
            let user = new User_1.default(data);
            const password = yield this.cryptoHashPasswordServices.passwordHash(command.getPassword());
            user.setPassword(password.hash);
            user.setSalt(password.salt);
            const emailExist = yield this.userServices.getByEmail(user.email);
            if (emailExist) {
                throw new InvalidArgumentException_1.default('The email has already taken');
            }
            user = yield this.userServices.store(user);
            return user;
        });
    }
}
exports.default = CreateUserHandler;
//# sourceMappingURL=CreateUserHandler.js.map