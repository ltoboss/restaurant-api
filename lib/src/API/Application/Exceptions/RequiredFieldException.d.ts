import Exception from './Exception';
export default class RequiredFieldException extends Exception {
    errors: any;
    message: any;
    code: any;
    context: any;
    private _object;
    constructor(message: {
        errors: any;
        message: any;
        code: any;
        context?: any;
        _object?: any;
    });
}
