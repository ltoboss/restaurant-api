/**
* @author Luis Felipe Osuna
*
* Template for the delete command. It wraps the data needed for the Handler
**/
import Validator from '../../../Common/Validator';
import { Command } from 'simple-command-bus';

export default class DeleteUserCommand extends Command {

  id : number;

  private validator: Validator;

  constructor(id : number) {
    super();
    this.id = id;
  }

  getId() {
    return this.id;
  }
}
