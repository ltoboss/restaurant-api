export default class Exception extends Error {
    httpStatus: any;
    errors: any;
    message: any;
    code: any;
    personalized: boolean;
    constructor(message: any);
    setHttpStatus(statusCode: any): void;
    getHttpStatus(): any;
    toJSON(): {
        code: any;
        errors: any;
        message: any;
    };
}
