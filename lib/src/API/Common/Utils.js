"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNewPaginatorResponse = exports.checkDuplicateInObject = exports.sleep = exports.chunkArray = void 0;
function chunkArray(myArray, chunk_size) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    for (index = 0; index < arrayLength; index += chunk_size) {
        const myChunk = myArray.slice(index, index + chunk_size);
        tempArray.push(myChunk);
    }
    return tempArray;
}
exports.chunkArray = chunkArray;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.sleep = sleep;
function checkDuplicateInObject(propertyName, inputArray) {
    var seenDuplicate = false, testObject = {};
    inputArray.map(function (item) {
        var itemPropertyName = item[propertyName];
        if (itemPropertyName in testObject) {
            testObject[itemPropertyName].duplicate = true;
            item.duplicate = true;
            seenDuplicate = true;
        }
        else {
            testObject[itemPropertyName] = item;
            delete item.duplicate;
        }
    });
    return seenDuplicate;
}
exports.checkDuplicateInObject = checkDuplicateInObject;
function generateNewPaginatorResponse(selectPage, limit, totalResults) {
    let response = {
        selectPage: (Number(selectPage) > 0) ? Number(selectPage) : 1,
        firstPage: 1,
        lastPage: Math.ceil(totalResults / limit),
        limit,
        totalResults
    };
    return response;
}
exports.generateNewPaginatorResponse = generateNewPaginatorResponse;
//# sourceMappingURL=Utils.js.map