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
exports.returnPositionSorterMatrix = exports.reshapeSorterMatrix = void 0;
function reshapeSorterMatrix(rows, cols) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = [];
        var arrays = Array(rows * cols).fill(0).map((e, i) => i + 1);
        var copy = arrays;
        for (var r = 0; r < rows; r++) {
            var row = [];
            for (var c = 0; c < cols; c++) {
                var i = r * cols + c;
                if (i < copy.length) {
                    row.push(copy[i]);
                }
            }
            result.push(row);
        }
        return result;
    });
}
exports.reshapeSorterMatrix = reshapeSorterMatrix;
function returnPositionSorterMatrix(rows, cols, position) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield reshapeSorterMatrix(rows, cols);
        console.log('result', result);
        if (position.row <= rows && position.col <= cols) {
            return result[position.row - 1][position.col - 1];
        }
        return 0;
    });
}
exports.returnPositionSorterMatrix = returnPositionSorterMatrix;
//# sourceMappingURL=ReshapeSorterMatrix.js.map