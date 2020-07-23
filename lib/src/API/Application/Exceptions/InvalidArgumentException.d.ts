export default class InvalidArgumentException extends Error {
    httpStatus: number;
    constructor(message?: string);
}
