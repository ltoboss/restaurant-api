"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../Config/Errors/errors");
function customErrorMessages(errors, customOptions) {
    try {
        errors.forEach((err) => {
            switch (err.type) {
                case 'any.empty':
                    err.type = errors_1.codeErrors.EMPTY.code;
                    err.message = errors_1.codeErrors.EMPTY.message;
                    break;
                case 'any.required':
                    err.type = errors_1.codeErrors.REQUIRED.code;
                    err.message = errors_1.codeErrors.REQUIRED.message;
                    break;
                case 'string.base':
                    err.type = errors_1.codeErrors.STRING.code;
                    err.message = errors_1.codeErrors.STRING.message;
                    break;
                case 'string.email':
                    err.type = errors_1.codeErrors.STRING.ATTRIBUTES.EMAIL.code;
                    err.message = errors_1.codeErrors.STRING.ATTRIBUTES.EMAIL.message;
                    break;
                case 'string.min':
                    err.type = errors_1.codeErrors.STRING.ATTRIBUTES.MIN.code;
                    err.message = `${errors_1.codeErrors.STRING.ATTRIBUTES.MIN.message} ${err.context.limit} characters`;
                    break;
                case 'string.max':
                    err.type = errors_1.codeErrors.STRING.ATTRIBUTES.MAX.code;
                    err.message = `${errors_1.codeErrors.STRING.ATTRIBUTES.MAX.message} ${err.context.limit} characters`;
                    break;
                case 'string.length':
                    err.type = errors_1.codeErrors.STRING.ATTRIBUTES.LIMIT.code;
                    err.message = `${errors_1.codeErrors.STRING.ATTRIBUTES.LIMIT.message} ${err.context.limit} characters`;
                    break;
                case 'string.regex.base':
                    err.type = errors_1.codeErrors.STRING.ATTRIBUTES.REGEX.code;
                    err.message = `${errors_1.codeErrors.STRING.ATTRIBUTES.REGEX.message}. ` +
                        (customOptions && customOptions.pattern ? ` Pattern example: ${customOptions.pattern}` : ``);
                    break;
                case 'number.base':
                    err.type = errors_1.codeErrors.NUMBER.code;
                    err.message = errors_1.codeErrors.NUMBER.message;
                    break;
                case 'number.positive':
                    err.type = errors_1.codeErrors.NUMBER.ATTRIBUTES.POSITIVE.code;
                    err.message = `${errors_1.codeErrors.NUMBER.ATTRIBUTES.MIN.message} ${err.context.limit}`;
                    break;
                case 'number.negative':
                    err.type = errors_1.codeErrors.NUMBER.ATTRIBUTES.NEGATIVE.code;
                    err.message = `${errors_1.codeErrors.NUMBER.ATTRIBUTES.NEGATIVE.message} ${err.context.limit}`;
                    break;
                case 'number.min':
                    err.type = errors_1.codeErrors.NUMBER.ATTRIBUTES.MIN.code;
                    err.message = `${errors_1.codeErrors.NUMBER.ATTRIBUTES.MIN.message} ${err.context.limit}`;
                    break;
                case 'number.max':
                    err.type = errors_1.codeErrors.NUMBER.ATTRIBUTES.MAX.code;
                    err.message = `${errors_1.codeErrors.NUMBER.ATTRIBUTES.MAX.message} ${err.context.limit}`;
                    break;
                case 'boolean.base':
                    err.type = errors_1.codeErrors.BOOLEAN.code;
                    err.message = errors_1.codeErrors.BOOLEAN.message;
                    break;
                default:
                    break;
            }
        });
    }
    catch (err) {
        console.error(err);
    }
    return errors;
}
exports.default = customErrorMessages;
//# sourceMappingURL=BaseErrorsSchema.js.map