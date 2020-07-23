import Exception from './Exception';
export default class ProcessTypeNotAssigned extends Exception {
    httpStatus: any;
    constructor(message?: string);
}
