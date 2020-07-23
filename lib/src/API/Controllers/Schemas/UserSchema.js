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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByWarehouseSchema = exports.CheckUserIdSchema = exports.AssignUsersProcessesSchema = exports.getUserByIdSchema = exports.UpdateUserSchema = exports.UpdateUserRolesSchema = exports.StoreUserSchema = void 0;
const Joi = __importStar(require("joi"));
const customErrorMessages = __importStar(require("../../Common/BaseErrorsSchema"));
exports.StoreUserSchema = {
    name: Joi.string()
        .min(3)
        .max(150)
        .required()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
    email: Joi.string()
        .required()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
    password: Joi.string()
        .min(6)
        .required()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
    address: Joi.string()
        .optional()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
    phone: Joi.number()
        .optional()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
    roleId: Joi.number()
        .positive()
        .integer()
        .optional()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
    employedId: Joi.number()
        .positive()
        .integer()
        .optional()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
    hasWarehouse: Joi.boolean()
        .optional()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
    warehouseId: Joi.number()
        .positive()
        .integer()
        .optional()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
};
exports.UpdateUserRolesSchema = Joi.array().items(Joi.object().keys({
    id: Joi.number()
        .required()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
    permits: Joi.array().items(Joi.object().keys({
        warehouse: Joi.number().integer()
            .required()
            .error((errors) => {
            return customErrorMessages.default(errors);
        }),
        roles: Joi.array().items(Joi.object().keys({
            rol: Joi.number().integer()
                .optional()
                .error((errors) => {
                return customErrorMessages.default(errors);
            }),
        }))
            .required()
            .error((errors) => {
            return customErrorMessages.default(errors);
        }),
    }))
        .required()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
}));
exports.UpdateUserSchema = {
    email: Joi.string()
        .required()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
    address: Joi.string()
        .optional()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
    phone: Joi.number()
        .optional()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
    roleId: Joi.number()
        .optional()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
    employedId: Joi.number()
        .optional()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
    hasWarehouse: Joi.boolean()
        .optional()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
    warehouseId: Joi.number()
        .positive()
        .integer()
        .optional()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
};
exports.getUserByIdSchema = {
    id: Joi.number()
        .integer()
        .min(1)
        .required()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
};
exports.AssignUsersProcessesSchema = {
    users: Joi.array().items(Joi.object().keys({
        id: Joi.number().integer().required(),
        processes: Joi.array().items(Joi.number().integer()),
    }))
        .required()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
};
exports.CheckUserIdSchema = {
    id: Joi.number()
        .positive()
        .integer()
        .required()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
};
exports.GetUserByWarehouseSchema = {
    users: Joi.array()
        .items(Joi.number(), Joi.string())
        .required()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
    warehouses: Joi.array()
        .items(Joi.number(), Joi.string())
        .required()
        .error((errors) => {
        return customErrorMessages.default(errors);
    }),
};
//# sourceMappingURL=UserSchema.js.map