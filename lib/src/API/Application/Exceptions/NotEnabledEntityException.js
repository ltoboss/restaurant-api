"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exception_1 = __importDefault(require("./Exception"));
class NotEnabledEntityException extends Exception_1.default {
    constructor(message) {
        super(message);
        this.personalized = true;
        this.httpStatus = 400;
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = NotEnabledEntityException.name;
        this.message = message;
    }
}
exports.default = NotEnabledEntityException;
//# sourceMappingURL=NotEnabledEntityException.js.map