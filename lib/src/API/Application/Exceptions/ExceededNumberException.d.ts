export default class ExceededNumberException extends Error {
    httpStatus: number;
    constructor(message?: string);
}
