"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidArgumentException extends Error {
    constructor(message) {
        super(message);
        this.httpStatus = 400;
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = InvalidArgumentException.name;
        this.message = message;
    }
}
exports.default = InvalidArgumentException;
//# sourceMappingURL=InvalidArgumentException.js.map