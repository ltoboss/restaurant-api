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
Object.defineProperty(exports, "__esModule", { value: true });
exports.walkDir = void 0;
const fs = require('fs');
const path = require('path');
function walkDir(dir, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        fs.readdirSync(dir).forEach((f) => {
            const dirPath = path.join(dir, f);
            const isDirectory = fs.statSync(dirPath).isDirectory();
            isDirectory ?
                walkDir(dirPath, callback) : callback(path.join(dir, f));
        });
    });
}
exports.walkDir = walkDir;
exports.default = walkDir;
//# sourceMappingURL=WalkDir.js.map