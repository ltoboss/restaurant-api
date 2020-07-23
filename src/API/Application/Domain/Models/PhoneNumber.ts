import {parseNumber, parsePhoneNumberFromString} from "libphonenumber-js";

export default class PhoneNumber {

    public static readonly KrackCoreBusinessCountryCode = "ES";
    public static readonly KrackCoreBusinessCountryPhoneCode = "34";

    private readonly sourceNumber;
    private readonly interpretedCountryCode;
    private readonly interpretedNationalNumber;

    public getSourceNumber() {
        return this.sourceNumber;
    }
    public getInterpretedCountryCode() {
        return this.interpretedCountryCode;
    }
    public getInterpretedNationalNumber() {
        return this.interpretedNationalNumber;
    }

    /**
     * @param sourceNumber Full phone number in any national or international form
     * @param interpretInternationalFormatsFromCountry Country from the phone number "writter". This matters since the
     * international country code varies from the calling country. E.g: the same number is dialed 0034666555444 from
     * Europe and 01134666555444 from EEUU. Since this affects also to the phonecountry code guessing algorithm, only
     * Spain is currently supported.
     */
    constructor(sourceNumber, interpretInternationalFormatsFromCountry: typeof PhoneNumber.KrackCoreBusinessCountryCode) {

        this.sourceNumber = sourceNumber;

        // the default country code is mandatory and it affects to IDD numbers interpretation
        // see https://github.com/catamphetamine/libphonenumber-js/issues/207
        let libPhoneNumber = parsePhoneNumberFromString(sourceNumber, interpretInternationalFormatsFromCountry);
        if (libPhoneNumber) {
            if (libPhoneNumber.countryCallingCode == PhoneNumber.KrackCoreBusinessCountryPhoneCode &&
                !PhoneNumber.isKrackNationalNumberDialedFromEurope(sourceNumber)
            ) {
                /* parsed phone number has spanish prefix but the source phone number doesn't have any prefix, so the
                 * country has been took just from the `defaultCountry` libphonenumber parameter, discard it */
                this.interpretedCountryCode = "";
            } else {
                this.interpretedCountryCode = libPhoneNumber.countryCallingCode;
            }

            this.interpretedNationalNumber = libPhoneNumber.formatNational();
            if (!this.interpretedNationalNumber) {
                this.interpretedNationalNumber = libPhoneNumber.nationalNumber;
            }
        } else {
            this.interpretedNationalNumber = sourceNumber;
        }

        this.interpretedNationalNumber = PhoneNumber.cleanupNumber(this.interpretedNationalNumber);
    }

    private static isKrackNationalNumberDialedFromEurope(phoneNumber: string) {
        return new RegExp(`^\\D*(\\+|00)\\D*${PhoneNumber.KrackCoreBusinessCountryCode}`).test(phoneNumber);
    }

    public static cleanupNumber(phoneNumber: string) {
        return (phoneNumber || "").replace(/[^+\d]/g, '');
    }
};
