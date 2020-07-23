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
const Result_1 = require("../Common/Result");
const UnauthorizedException_1 = __importDefault(require("../Application/Exceptions/UnauthorizedException"));
const RequiredFieldException_1 = __importDefault(require("../Application/Exceptions/RequiredFieldException"));
const NotFoundEntityException_1 = __importDefault(require("../Application/Exceptions/NotFoundEntityException"));
const DuplicatedEntryException_1 = __importDefault(require("../Application/Exceptions/DuplicatedEntryException"));
const InvalidArgumentException_1 = __importDefault(require("../Application/Exceptions/InvalidArgumentException"));
const ActionNotAllowedException_1 = __importDefault(require("../Application/Exceptions/ActionNotAllowedException"));
const PreconditionRequiredException_1 = __importDefault(require("../Application/Exceptions/PreconditionRequiredException"));
const ProcessTypeNotAssignedException_1 = __importDefault(require("../Application/Exceptions/ProcessTypeNotAssignedException"));
const NotDeleteForeignKey_1 = __importDefault(require("../Application/Exceptions/NotDeleteForeignKey"));
const UserRegistrationInputExistException_1 = __importDefault(require("../Application/Exceptions/UserRegistrationInputExistException"));
const UserRegistrationOutputExistException_1 = __importDefault(require("../Application/Exceptions/UserRegistrationOutputExistException"));
const UserRegistrationWithoutOutputException_1 = __importDefault(require("../Application/Exceptions/UserRegistrationWithoutOutputException"));
const SameRequestInAShortPeriod_1 = __importDefault(require("../Application/Exceptions/SameRequestInAShortPeriod"));
const TypeEnumIdNotExistException_1 = __importDefault(require("../Application/Exceptions/TypeEnumIdNotExistException"));
const StoppedServiceException_1 = __importDefault(require("../Application/Exceptions/StoppedServiceException"));
const ExceededNumberException_1 = __importDefault(require("../Application/Exceptions/ExceededNumberException"));
const ER_DUP_ENTRY = 1062;
const ER_ROW_IS_REFERENCED_2 = 1451;
const ER_NO_REFERENCED_ROW_2 = 1452;
const responses = (e, response) => __awaiter(void 0, void 0, void 0, function* () {
    if (e instanceof InvalidArgumentException_1.default) {
        return yield response.status(400).json(Result_1.error(e.message, e.name, 400));
    }
    else if (e instanceof ExceededNumberException_1.default) {
        return yield response.status(400).json(Result_1.error(e.message, e.name, 400));
    }
    else if (e instanceof RequiredFieldException_1.default) {
        return yield response.status(400).json(Result_1.error(e.message, e.name, 400));
    }
    else if (e instanceof SameRequestInAShortPeriod_1.default) {
        return yield response.status(403).json(Result_1.error(e.message, e.name, 403));
    }
    else if (e instanceof ProcessTypeNotAssignedException_1.default) {
        return response.status(400).json(Result_1.error(e.message, e.name, 400));
    }
    else if (e instanceof UnauthorizedException_1.default) {
        return yield response.status(401).json(Result_1.error(e.message, e.name, 401));
    }
    else if (e instanceof NotFoundEntityException_1.default) {
        return yield response.status(404).json(Result_1.error(e.message, e.name, 404));
    }
    else if (e instanceof ActionNotAllowedException_1.default) {
        return yield response.status(405).json(Result_1.error(e.message, e.name, 405));
    }
    else if (e instanceof PreconditionRequiredException_1.default) {
        return yield response.status(428).json(Result_1.error(e.message, e.name, 428));
    }
    else if (e.errno && e.errno === ER_ROW_IS_REFERENCED_2) {
        const exErr = new NotDeleteForeignKey_1.default(e.message);
        return yield response.status(exErr.httpStatus).json(Result_1.error(exErr.message, exErr.name, exErr.httpStatus));
    }
    else if (e instanceof UserRegistrationWithoutOutputException_1.default) {
        return yield response.status(429).json(Result_1.error(e.message, e.name, 429));
    }
    else if (e instanceof UserRegistrationInputExistException_1.default) {
        return yield response.status(430).json(Result_1.error(e.message, e.name, 430));
    }
    else if (e instanceof UserRegistrationOutputExistException_1.default) {
        return yield response.status(431).json(Result_1.error(e.message, e.name, 431));
    }
    else if (e.errno && e.errno === ER_DUP_ENTRY) {
        const exErr = new DuplicatedEntryException_1.default(e.message);
        return yield response.status(exErr.httpStatus).json(Result_1.error(exErr.message, exErr.name, exErr.httpStatus));
    }
    else if (e instanceof TypeEnumIdNotExistException_1.default) {
        return response.status(433).json(Result_1.error(e.message, e.name, 433));
    }
    else if (e instanceof StoppedServiceException_1.default) {
        return response.status(405).json(Result_1.error(e.message, e.name, 405));
    }
    else if (typeof e.getHttpStatus === 'function' && e.getHttpStatus) {
        return response.status(e.getHttpStatus()).json(Result_1.error(e.message, e.name, e.getHttpStatus()));
    }
    else if (typeof e.statusCode !== 'undefined') {
        return response.status(e.statusCode).json(Result_1.error(e.message, e.message, e.statusCode));
    }
    else {
        return response.status(400).json(Result_1.error(e.message, 'Default error', 400));
    }
});
exports.default = responses;
//# sourceMappingURL=Responses.js.map