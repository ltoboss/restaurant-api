"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = __importStar(require("joi"));
const RequiredFieldException_1 = __importDefault(require("../Application/Exceptions/RequiredFieldException"));
class Validator {
    validate(data, schema) {
        const validationsOptions = { abortEarly: false, allowUnknown: true };
        const { error } = Joi.validate(data, schema, validationsOptions);
        if (error) {
            const details = this.validationResult(error.details);
            details._object = error._object;
            throw new RequiredFieldException_1.default(details);
        }
        return error;
    }
    validationResult(errors) {
        const usefulErrors = {
            errors: {},
            message: 'InvalidArgumentException',
            code: 400,
            context: errors.context,
            _object: undefined,
        };
        errors.map((error) => {
            if (!usefulErrors.errors.hasOwnProperty(error.path.join('_'))) {
                usefulErrors.errors[error.path.join('_')] = {
                    field: error.path.join('_'),
                    type: error.type,
                    message: error.message,
                };
            }
        });
        return usefulErrors;
    }
}
exports.default = Validator;
//# sourceMappingURL=Validator.js.map