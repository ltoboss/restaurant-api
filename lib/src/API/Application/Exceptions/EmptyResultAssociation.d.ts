export default class EmptyResultAssociation extends Error {
    httpStatus: any;
    errors: any;
    message: any;
    code: any;
    personalized: boolean;
    constructor(message: any);
    toJSON(): {
        code: any;
        errors: any;
        message: any;
    };
}
