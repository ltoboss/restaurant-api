import Validator from '../../../Common/Validator';
import { Command } from 'simple-command-bus';

export class GetSingleUser{

}

export default class AllTablesByStatusCommand extends Command {

  status : boolean;
  // TODO : Define Command parameters

  private validator: Validator;

  constructor(status : boolean) {
    super();
    this.status = status;
  }

  getStatus() {
    return this.status;
  }
}
