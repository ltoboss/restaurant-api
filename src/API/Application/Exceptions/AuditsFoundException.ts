import Exception from './Exception';

export default class AuditsFoundException extends Exception {

  constructor(message?: string) {
    super(message);
    this.personalized = true;
    this.httpStatus = 422;
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = AuditsFoundException.name;
    this.message = message;
  }
}
