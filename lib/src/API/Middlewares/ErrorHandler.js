"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ER_DUP_ENTRY = 1062;
const ER_NO_REFERENCED_ROW_2 = 1452;
const Responses_1 = __importDefault(require("../Common/Responses"));
function errorHandler(err, req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let error = err;
        if (err) {
            return yield Responses_1.default(err, res);
        }
        else {
            return next();
        }
    });
}
exports.default = errorHandler;
//# sourceMappingURL=ErrorHandler.js.map