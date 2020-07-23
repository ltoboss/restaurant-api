"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exception_1 = __importDefault(require("./Exception"));
class DuplicatedEntryException extends Exception_1.default {
    constructor(message, code) {
        super(message);
        this.personalized = true;
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = DuplicatedEntryException.name;
        this.httpStatus = 409;
        this.code = code ? code : this.httpStatus;
        this.message = message;
    }
    toJSON() {
        return {
            code: this.code,
            errors: this.errors,
            message: this.message,
        };
    }
}
exports.default = DuplicatedEntryException;
//# sourceMappingURL=DuplicatedEntryException.js.map