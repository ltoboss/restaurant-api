"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exception_1 = __importDefault(require("./Exception"));
class RequiredFieldException extends Exception_1.default {
    constructor(message) {
        super(message.message);
        this.personalized = true;
        this.errors = message.errors ? message.errors : undefined;
        this.message = message.errors ? message.errors : message;
        this.code = message.code ? message.code : undefined;
        this.context = message.context ? message.context : undefined;
        this._object = message._object ? message._object : undefined;
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = RequiredFieldException.name;
        this.message = message;
    }
}
exports.default = RequiredFieldException;
//# sourceMappingURL=RequiredFieldException.js.map