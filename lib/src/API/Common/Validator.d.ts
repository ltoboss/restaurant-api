export default class Validator {
    validate(data: any, schema: any): any;
    validationResult(errors: any): {
        errors: {};
        message: string;
        code: number;
        context: any;
        _object: any;
    };
}
