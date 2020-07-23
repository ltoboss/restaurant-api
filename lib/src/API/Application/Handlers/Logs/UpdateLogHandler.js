"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LogServices_1 = __importDefault(require("../../Services/Logs/LogServices"));
const Log_1 = __importDefault(require("../../Domain/Entities/Log/Log"));
const LogSchema_1 = require("../../../Controllers/Schemas/LogSchema");
const Validator_1 = __importDefault(require("../../../Common/Validator"));
const RequiredFieldException_1 = __importDefault(require("../../Exceptions/RequiredFieldException"));
class UpdateLogHandler {
    constructor() {
        this.logServices = new LogServices_1.default();
        this.validator = new Validator_1.default();
    }
    validate(command) {
        const error = this.validator.validate(command, LogSchema_1.UpdateLogSchema);
        if (error) {
            const details = this.validator.validationResult(error.details);
            throw new RequiredFieldException_1.default(this.validator.validationResult(error.details));
        }
    }
    handle(command) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validate(command);
            const log = new Log_1.default(command);
            return yield this.logServices.update(log);
        });
    }
}
exports.default = UpdateLogHandler;
//# sourceMappingURL=UpdateLogHandler.js.map