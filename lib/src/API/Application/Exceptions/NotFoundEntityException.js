"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exception_1 = __importDefault(require("./Exception"));
class NotFoundEntityException extends Exception_1.default {
    constructor(message) {
        super(message);
        this.personalized = true;
        this.httpStatus = 404;
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = NotFoundEntityException.name;
        this.message = message;
    }
}
exports.default = NotFoundEntityException;
//# sourceMappingURL=NotFoundEntityException.js.map