import Validator from '../../../Common/Validator';
import { Command } from 'simple-command-bus';
import { StoreZoneSchema } from '../../../Controllers/Schemas/ZoneSchema'
import * as _ from 'lodash';
import RequiredFieldException from '../../Exceptions/RequiredFieldException';

export default class CreateZoneCommand extends Command {
  
  constructor(body: Object, createPermissions?: boolean) {
    super();
    
    if (!body) throw Error('Body not found');

    const validator = new Validator();
    const error = validator.validate(body, StoreZoneSchema);

    if (error) {
      throw new RequiredFieldException(validator.validationResult(error.details));
    }
    _.assign(this, body);
  }
}
