import Exception from './Exception';
export default class SameRequestInAShortPeriod extends Exception {
    name: any;
    httpStatus: number;
    code: any;
    constructor(request?: any, code?: any);
}
