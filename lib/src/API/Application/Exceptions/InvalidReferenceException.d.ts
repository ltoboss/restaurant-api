import Exception from './Exception';
export default class InvalidReferenceException extends Exception {
    httpStatus: number;
    constructor(message?: string, pattern?: any);
}
