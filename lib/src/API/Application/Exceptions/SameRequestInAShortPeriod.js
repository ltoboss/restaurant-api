"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exception_1 = __importDefault(require("./Exception"));
class SameRequestInAShortPeriod extends Exception_1.default {
    constructor(request, code) {
        super(request);
        this.httpStatus = 403;
        this.personalized = true;
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = SameRequestInAShortPeriod.name;
        this.code = code ? code : this.httpStatus;
    }
}
exports.default = SameRequestInAShortPeriod;
//# sourceMappingURL=SameRequestInAShortPeriod.js.map