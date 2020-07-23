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
const CreateTableCommand_1 = __importDefault(require("../Application/Commands/Tables/CreateTableCommand"));
const GetSingleTableCommand_1 = __importDefault(require("../Application/Commands/Tables/GetSingleTableCommand"));
const DeleteTableCommand_1 = __importDefault(require("../Application/Commands/Tables/DeleteTableCommand"));
const GetAllTablesCommand_1 = __importDefault(require("../Application/Commands/Tables/GetAllTablesCommand"));
const AllTablesByStatusCommand_1 = __importDefault(require("../Application/Commands/Tables/AllTablesByStatusCommand"));
const InvalidArgumentException_1 = __importDefault(require("../Application/Exceptions/InvalidArgumentException"));
const Result_1 = require("../Common/Result");
const CommandBus_1 = __importDefault(require("../Application/Commands/CommandBus"));
class TableController {
    constructor() {
    }
    index(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const command = new GetAllTablesCommand_1.default();
                const result = yield CommandBus_1.default.handle(command);
                return response.status(200).json(Result_1.success(result, 'Table list retrieve', 200));
            }
            catch (e) {
                next(e);
            }
        });
    }
    store(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield CommandBus_1.default.handle(new CreateTableCommand_1.default(request.body));
                return response.status(200).json(Result_1.success(result, 'Table created', 200));
            }
            catch (e) {
                next(e);
            }
        });
    }
    show(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!request.params.id)
                    throw new InvalidArgumentException_1.default("Table's Id is required");
                const result = yield CommandBus_1.default.handle(new GetSingleTableCommand_1.default(request.params.id));
                return response.status(200).json(Result_1.success(result, 'Table retrieved', 200));
            }
            catch (e) {
                next(e);
            }
        });
    }
    destroy(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!request.params.id)
                    throw new InvalidArgumentException_1.default("Table's id is required");
                yield CommandBus_1.default.handle(new DeleteTableCommand_1.default(request.params.id));
                return response.status(200).json(Result_1.successDeleted('Table deleted', 200));
            }
            catch (e) {
                next(e);
            }
        });
    }
    getByStatus(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield CommandBus_1.default.handle(new AllTablesByStatusCommand_1.default(request.body.isActive));
                return response.status(200).json(Result_1.success(result, 'Table list retrieve', 200));
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.default = TableController;
//# sourceMappingURL=TableController.js.map