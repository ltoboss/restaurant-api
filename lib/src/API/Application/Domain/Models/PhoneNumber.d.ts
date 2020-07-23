export default class PhoneNumber {
    static readonly KrackCoreBusinessCountryCode = "ES";
    static readonly KrackCoreBusinessCountryPhoneCode = "34";
    private readonly sourceNumber;
    private readonly interpretedCountryCode;
    private readonly interpretedNationalNumber;
    getSourceNumber(): any;
    getInterpretedCountryCode(): any;
    getInterpretedNationalNumber(): any;
    constructor(sourceNumber: any, interpretInternationalFormatsFromCountry: typeof PhoneNumber.KrackCoreBusinessCountryCode);
    private static isKrackNationalNumberDialedFromEurope;
    static cleanupNumber(phoneNumber: string): string;
}
