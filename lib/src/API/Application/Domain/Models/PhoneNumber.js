"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const libphonenumber_js_1 = require("libphonenumber-js");
class PhoneNumber {
    constructor(sourceNumber, interpretInternationalFormatsFromCountry) {
        this.sourceNumber = sourceNumber;
        let libPhoneNumber = libphonenumber_js_1.parsePhoneNumberFromString(sourceNumber, interpretInternationalFormatsFromCountry);
        if (libPhoneNumber) {
            if (libPhoneNumber.countryCallingCode == PhoneNumber.KrackCoreBusinessCountryPhoneCode &&
                !PhoneNumber.isKrackNationalNumberDialedFromEurope(sourceNumber)) {
                this.interpretedCountryCode = "";
            }
            else {
                this.interpretedCountryCode = libPhoneNumber.countryCallingCode;
            }
            this.interpretedNationalNumber = libPhoneNumber.formatNational();
            if (!this.interpretedNationalNumber) {
                this.interpretedNationalNumber = libPhoneNumber.nationalNumber;
            }
        }
        else {
            this.interpretedNationalNumber = sourceNumber;
        }
        this.interpretedNationalNumber = PhoneNumber.cleanupNumber(this.interpretedNationalNumber);
    }
    getSourceNumber() {
        return this.sourceNumber;
    }
    getInterpretedCountryCode() {
        return this.interpretedCountryCode;
    }
    getInterpretedNationalNumber() {
        return this.interpretedNationalNumber;
    }
    static isKrackNationalNumberDialedFromEurope(phoneNumber) {
        return new RegExp(`^\\D*(\\+|00)\\D*${PhoneNumber.KrackCoreBusinessCountryCode}`).test(phoneNumber);
    }
    static cleanupNumber(phoneNumber) {
        return (phoneNumber || "").replace(/[^+\d]/g, '');
    }
}
exports.default = PhoneNumber;
PhoneNumber.KrackCoreBusinessCountryCode = "ES";
PhoneNumber.KrackCoreBusinessCountryPhoneCode = "34";
;
//# sourceMappingURL=PhoneNumber.js.map