"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exception_1 = __importDefault(require("./Exception"));
class NeedUserPermisionException extends Exception_1.default {
    constructor(message, code) {
        super(message);
        this.personalized = true;
        this.httpStatus = 510;
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = NeedUserPermisionException.name;
        this.message = message;
    }
}
exports.default = NeedUserPermisionException;
//# sourceMappingURL=NeedUserPermisionException.js.map