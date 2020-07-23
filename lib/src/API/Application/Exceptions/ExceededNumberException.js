"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExceededNumberException extends Error {
    constructor(message) {
        super(message);
        this.httpStatus = 400;
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = ExceededNumberException.name;
        this.message = message;
    }
}
exports.default = ExceededNumberException;
//# sourceMappingURL=ExceededNumberException.js.map