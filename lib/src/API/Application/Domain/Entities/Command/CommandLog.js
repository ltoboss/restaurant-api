"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var CommandLog_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const BaseEntity_1 = __importDefault(require("../BaseEntity"));
const CommandInstanceServices_1 = __importDefault(require("../../../Services/CommandInstances/CommandInstanceServices"));
const isSyncEntities_1 = require("../../../../Common/isSyncEntities");
let CommandLog = CommandLog_1 = class CommandLog extends BaseEntity_1.default {
    constructor(command, log, pid) {
        super(log);
        this.command = command;
        this.commandInput = log;
        this.pid = pid;
    }
    setPid(pid) {
        if (!pid) {
            this.pid = process.pid;
        }
        else {
            this.pid = pid;
        }
    }
    getCommandInstance() {
        return __awaiter(this, void 0, void 0, function* () {
            const commandInstanceServices = new CommandInstanceServices_1.default();
            const pid = this.pid;
            return yield commandInstanceServices.find({ pid });
        });
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CommandLog.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommandLog.prototype, "pid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommandLog.prototype, "command", void 0);
__decorate([
    typeorm_1.Column('simple-json'),
    __metadata("design:type", Object)
], CommandLog.prototype, "commandInput", void 0);
CommandLog = CommandLog_1 = __decorate([
    typeorm_1.Entity({ synchronize: isSyncEntities_1.isSyncEntities(CommandLog_1) }),
    __metadata("design:paramtypes", [String, Object, Number])
], CommandLog);
exports.default = CommandLog;
//# sourceMappingURL=CommandLog.js.map