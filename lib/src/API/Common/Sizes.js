"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortSizeName = void 0;
function sortSizeName(size1, size2) {
    const size1IsNumeric = /^\d+(\.\d+)?$/.test(size1), size2IsNumeric = /^\d+(\.\d+)?$/.test(size2);
    if (size1IsNumeric && !size2IsNumeric) {
        return -1;
    }
    else if (!size1IsNumeric && size2IsNumeric) {
        return 1;
    }
    let size1Comparable = size1, size2Comparable = size2;
    if (size1IsNumeric && size2IsNumeric) {
        size1Comparable = parseFloat(size1);
        size2Comparable = parseFloat(size2);
    }
    return size1Comparable > size2Comparable ? 1 : size1Comparable < size2Comparable ? -1 : 0;
}
exports.sortSizeName = sortSizeName;
//# sourceMappingURL=Sizes.js.map