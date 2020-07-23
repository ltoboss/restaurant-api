import Exception from './Exception';

export default class NeedUserPermisionException extends Exception {

  constructor(message?: string, code?: any) {
    super(message);
    this.personalized = true;
    this.httpStatus = 510;
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = NeedUserPermisionException.name;
    this.message = message;
  }
}
