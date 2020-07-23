import * as Joi from 'joi';
import * as customErrorMessages from '../../Common/BaseErrorsSchema';

export const StoreTableSchema = {
  name: Joi.string()
    .min(3)
    .max(150)
    .required()
    .error((errors) => {
      return customErrorMessages.default(errors);
    }),
  size: Joi.number()
    .optional(),
  isActive: Joi.boolean()
    .default(false),
  zone: Joi.number()
    .required()
    .error((errors) => {
      return customErrorMessages.default(errors);
    }),
};

