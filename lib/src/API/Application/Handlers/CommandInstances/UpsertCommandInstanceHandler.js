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
const CommandInstanceServices_1 = __importDefault(require("../../Services/CommandInstances/CommandInstanceServices"));
const CommandInstance_1 = __importDefault(require("../../Domain/Entities/Command/CommandInstance"));
const CommandInstanceSchema_1 = require("../../../Controllers/Schemas/CommandInstanceSchema");
const RequiredFieldException_1 = __importDefault(require("../../Exceptions/RequiredFieldException"));
const Validator_1 = __importDefault(require("../../../Common/Validator"));
class UpsertCommandInstanceHandler {
    constructor() {
        this.commandInstanceServices = new CommandInstanceServices_1.default();
        this.validator = new Validator_1.default();
    }
    validate(command) {
        const error = this.validator.validate(command, CommandInstanceSchema_1.UpsertCommandInstanceSchema);
        if (error) {
            const details = this.validator.validationResult(error.details);
            throw new RequiredFieldException_1.default(this.validator.validationResult(error.details));
        }
    }
    handle(command) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validate(command);
            const commandInstance = new CommandInstance_1.default(command);
            const match = yield this.commandInstanceServices.findOne({ where: { id: commandInstance.getId() } });
            if (match)
                commandInstance.setId(match.getId());
            return yield this.commandInstanceServices.store(commandInstance);
        });
    }
}
exports.default = UpsertCommandInstanceHandler;
//# sourceMappingURL=UpsertCommandInstanceHandler.js.map