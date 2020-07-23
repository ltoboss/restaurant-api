import Validator from '../../../Common/Validator';
import { Command } from 'simple-command-bus';

export default class GetSingleTableCommand extends Command {

  private id : number;

  constructor(id : number) {
    super();
    this.id = id;
  }

  getId() {
    return this.id;
  }
}
