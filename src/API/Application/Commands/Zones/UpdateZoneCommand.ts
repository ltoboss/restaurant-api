import Validator from '../../../Common/Validator';
import { Command } from 'simple-command-bus';
import { StoreZoneSchema } from '../../../Controllers/Schemas/ZoneSchema';
import RequiredFieldException from '../../Exceptions/RequiredFieldException';
import * as _ from 'lodash';

export default class UpdateZoneCommand extends Command {
  private id;

  constructor(body : any) {
    super();
    const validator = new Validator();
    const error = validator.validate(body, StoreZoneSchema);
    if(error)
      throw new RequiredFieldException(validator.validationResult(error.details));
    _.assign(this, body);
    this.id = body.id;
  }

  getId(){
    return this.id;
  }
}
