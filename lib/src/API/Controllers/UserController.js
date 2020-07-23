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
const UserServices_1 = __importDefault(require("../Application/Services/Users/UserServices"));
const CreateUserCommand_1 = __importDefault(require("../Application/Commands/Users/CreateUserCommand"));
const DeleteUserCommand_1 = __importDefault(require("../Application/Commands/Users/DeleteUserCommand"));
const UpdateUserCommand_1 = __importDefault(require("../Application/Commands/Users/UpdateUserCommand"));
const GetAllUsersCommand_1 = __importDefault(require("../Application/Commands/Users/GetAllUsersCommand"));
const GetSingleUserCommand_1 = __importDefault(require("../Application/Commands/Users/GetSingleUserCommand"));
const InvalidArgumentException_1 = __importDefault(require("../Application/Exceptions/InvalidArgumentException"));
const Result_1 = require("../Common/Result");
const CommandBus_1 = __importDefault(require("../Application/Commands/CommandBus"));
const _ = __importStar(require("lodash"));
const ActionNotAllowedException_1 = __importDefault(require("../Application/Exceptions/ActionNotAllowedException"));
const HTTP_STATUS_ACCEPTED = 202;
const HTTP_STATUS_OK = 200;
class UserController {
    constructor() {
        this.userServices = new UserServices_1.default();
    }
    index(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const command = new GetAllUsersCommand_1.default();
                const result = yield CommandBus_1.default.handle(command);
                return response.status(200).json(Result_1.success(result.users, 'User list retrieve', 200));
            }
            catch (e) {
                next(e);
            }
        });
    }
    store(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const command = new CreateUserCommand_1.default(request.body);
                const result = yield CommandBus_1.default.handle(command);
                return response.status(201).json(Result_1.success(result, 'User created', 201));
            }
            catch (e) {
                next(e);
            }
        });
    }
    show(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!request.params.id) {
                    throw new InvalidArgumentException_1.default("User's Id is required");
                }
                const command = new GetSingleUserCommand_1.default(request.params.id);
                const result = yield CommandBus_1.default.handle(command);
                return response.status(200).json(Result_1.success(result, 'User retrieved', 200));
            }
            catch (e) {
                next(e);
            }
        });
    }
    update(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const command = new UpdateUserCommand_1.default(_.assign(request.body, {
                    id: Number(request.params.id)
                }));
                const result = yield CommandBus_1.default.handle(command);
                return response.status(200).json(Result_1.success(result, 'User updated', 200));
            }
            catch (e) {
                next(e);
            }
        });
    }
    destroy(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!request.params.id) {
                    throw new InvalidArgumentException_1.default('UserId are required');
                }
                const { id } = yield Object.assign(request.user);
                if (Number(id) === Number(request.params.id)) {
                    throw new ActionNotAllowedException_1.default('The users cannot affect own roles');
                }
                const userCommand = new DeleteUserCommand_1.default(request.params.id);
                yield CommandBus_1.default.handle(userCommand);
                return response.status(200).json(Result_1.successDeleted('User deleted', 200));
            }
            catch (e) {
                next(e);
            }
        });
    }
    getProfile(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!request.user) {
                return response.json(Result_1.error(request.user, 'Cannot get authenticated user', 404));
            }
            const roles = yield request.user.roles;
            const user = {
                id: request.user.id,
                email: request.user.email,
                name: request.user.name
            };
            return response.json(Result_1.success(user, 'User profile', 200));
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map