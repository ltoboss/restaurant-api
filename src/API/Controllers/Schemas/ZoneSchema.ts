import * as Joi from 'joi';
import * as customErrorMessages from '../../Common/BaseErrorsSchema';

export const StoreZoneSchema = {
  name: Joi.string()
    .min(3)
    .max(150)
    .required()
    .error((errors) => {
      return customErrorMessages.default(errors);
    }),
  description: Joi.string()
    .required()
    .max(200)
    .error((errors) => {
      return customErrorMessages.default(errors);
    }),
  isActive: Joi.boolean()
    .default(false)
};

