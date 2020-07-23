"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exception extends Error {
    constructor(message) {
        super(message);
        this.personalized = false;
        this.httpStatus = 400;
        this.message = message;
    }
    setHttpStatus(statusCode) {
        this.httpStatus = statusCode;
    }
    getHttpStatus() {
        return this.httpStatus;
    }
    toJSON() {
        return {
            code: this.code ? this.code : this.httpStatus,
            errors: this.errors ? this.errors : this.name,
            message: this.message,
        };
    }
}
exports.default = Exception;
//# sourceMappingURL=Exception.js.map