"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.successDeleted = exports.success = void 0;
function success(data, msg, status) {
    return {
        data,
        message: msg,
        code: status,
    };
}
exports.success = success;
function successDeleted(msg, status) {
    return {
        message: msg,
        code: status,
    };
}
exports.successDeleted = successDeleted;
function error(data, msg, status) {
    return {
        errors: data,
        message: msg,
        code: status,
    };
}
exports.error = error;
//# sourceMappingURL=Result.js.map