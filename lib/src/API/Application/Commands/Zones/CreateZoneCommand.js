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
const Validator_1 = __importDefault(require("../../../Common/Validator"));
const simple_command_bus_1 = require("simple-command-bus");
const ZoneSchema_1 = require("../../../Controllers/Schemas/ZoneSchema");
const _ = __importStar(require("lodash"));
const RequiredFieldException_1 = __importDefault(require("../../Exceptions/RequiredFieldException"));
class CreateZoneCommand extends simple_command_bus_1.Command {
    constructor(body, createPermissions) {
        super();
        if (!body)
            throw Error('Body not found');
        const validator = new Validator_1.default();
        const error = validator.validate(body, ZoneSchema_1.StoreZoneSchema);
        if (error) {
            throw new RequiredFieldException_1.default(validator.validationResult(error.details));
        }
        _.assign(this, body);
    }
}
exports.default = CreateZoneCommand;
//# sourceMappingURL=CreateZoneCommand.js.map