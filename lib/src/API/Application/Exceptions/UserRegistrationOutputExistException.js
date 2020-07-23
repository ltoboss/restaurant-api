"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exception_1 = __importDefault(require("./Exception"));
class UserRegistrationOutputExistException extends Exception_1.default {
    constructor(message) {
        super(message);
        this.personalized = true;
        this.httpStatus = 431;
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = UserRegistrationOutputExistException.name;
        this.message = message;
    }
}
exports.default = UserRegistrationOutputExistException;
//# sourceMappingURL=UserRegistrationOutputExistException.js.map