"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PREFIX_LOCATION_REGEX_VALID = exports.REFERENCE_PRODUCT_MODEL_REGEX_VALID = exports.REFERENCE_MODEL_REGEX_VALID = exports.REFERENCE_PRODUCT_REGEX_VALID = exports.REFERENCE_PACKING_REGEX_VALID = exports.REFERENCE_LOCATION_NEW_REGEX_VALID = exports.REFERENCE_LOCATION_OLD_REGEX_VALID = exports.REFERENCE_LOCATION_REGEX_VALID = exports.getLocationReference = void 0;
function getLocationReference(reference) {
    if (reference) {
        if (reference.match(exports.REFERENCE_LOCATION_NEW_REGEX_VALID)) {
            return reference;
        }
        else {
            let match = reference.match(exports.REFERENCE_LOCATION_OLD_REGEX_VALID);
            if (match) {
                return 'P' + pad(match[1], 3) + 'A' + pad("" + convertContainerRowLetterToNumber(match[2]), 2) + 'C' + pad(match[3], 3);
            }
            else {
                return null;
            }
        }
    }
    else {
        return null;
    }
}
exports.getLocationReference = getLocationReference;
function convertContainerRowLetterToNumber(letter) {
    return letter.toUpperCase().charCodeAt(0) - 64;
}
function pad(num, size) {
    let s = num + '';
    while (s.length < size)
        s = '0' + s;
    return s;
}
exports.REFERENCE_LOCATION_REGEX_VALID = /^(([A-Z]{1,4})([\d]{3})A([\d]{2})C([\d]{3}))|(P(\d+)([A-Z])(\d+))$/;
exports.REFERENCE_LOCATION_OLD_REGEX_VALID = /^P(\d+)([A-Z])(\d+)$/;
exports.REFERENCE_LOCATION_NEW_REGEX_VALID = /^([A-Z]{1,4})([\d]{3})A([\d]{2})C([\d]{3})$/;
exports.REFERENCE_PACKING_REGEX_VALID = /^([A-Z])(\d{4})$/;
exports.REFERENCE_PRODUCT_REGEX_VALID = /^([0]{2})([\d]{6})([\d]{2})([\d]{3})([\d]{5})$/;
exports.REFERENCE_MODEL_REGEX_VALID = /^([0-9]{1,6})$/;
exports.REFERENCE_PRODUCT_MODEL_REGEX_VALID = /^(([0]{2})([\d]{6})([\d]{2})([\d]{3})([\d]{5}))|([0-9]{1,6})$/;
exports.PREFIX_LOCATION_REGEX_VALID = /^[a-zA-Z]*$/;
//# sourceMappingURL=References.js.map