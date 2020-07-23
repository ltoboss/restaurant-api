"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmptyResultAssociation extends Error {
    constructor(message) {
        super(message);
        this.personalized = false;
        this.httpStatus = 204;
    }
    toJSON() {
        return {
            code: this.code ? this.code : this.httpStatus,
            errors: this.errors ? this.errors : this.name,
            message: this.message,
        };
    }
}
exports.default = EmptyResultAssociation;
//# sourceMappingURL=EmptyResultAssociation.js.map