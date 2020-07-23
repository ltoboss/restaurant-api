"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exception_1 = __importDefault(require("./Exception"));
class AuditsFoundException extends Exception_1.default {
    constructor(message) {
        super(message);
        this.personalized = true;
        this.httpStatus = 422;
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = AuditsFoundException.name;
        this.message = message;
    }
}
exports.default = AuditsFoundException;
//# sourceMappingURL=AuditsFoundException.js.map