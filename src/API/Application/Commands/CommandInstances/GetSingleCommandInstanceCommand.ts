import Validator from '../../../Common/Validator';
import { Command } from 'simple-command-bus';

export class GetSingleCommandInstance{

}

export default class GetSingleCommandInstanceCommand extends Command {

  id : number;
  // TODO : Define Command parameters

  private validator: Validator;

  constructor(id : number) {
    super();
    this.id = id;

    // TODO Initialize command parameters
  }

  getId() {
    return this.id;
  }
}
