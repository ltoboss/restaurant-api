import Exception from './Exception';
export default class NotDeleteForeignKey extends Exception {
    name: any;
    httpStatus: any;
    code: any;
    constructor(message?: string, code?: any);
    toJSON(): {
        code: any;
        errors: any;
        message: any;
    };
}
