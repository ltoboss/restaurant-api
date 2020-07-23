import Validator from '../../../Common/Validator';
import { Command } from 'simple-command-bus';
import { StoreTableSchema } from '../../../Controllers/Schemas/TableSchema'
import * as _ from 'lodash';
import RequiredFieldException from '../../Exceptions/RequiredFieldException';

export default class CreateTableCommand extends Command {
  
  constructor(body: Object, createPermissions?: boolean) {
    super();
    
    if (!body) throw Error('Body not found');

    const validator = new Validator();
    const error = validator.validate(body, StoreTableSchema);

    if (error) {
      throw new RequiredFieldException(validator.validationResult(error.details));
    }
    _.assign(this, body);
  }
}
