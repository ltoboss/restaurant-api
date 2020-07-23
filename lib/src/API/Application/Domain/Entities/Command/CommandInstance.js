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
var CommandInstance_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const DEFAULT_REFRESH_MILISECONDS_INTERVAL = 10000;
const BaseEntity_1 = __importDefault(require("../BaseEntity"));
const CommandInstanceServices_1 = __importDefault(require("../../../Services/CommandInstances/CommandInstanceServices"));
const DEFAULT_MINUTES_TO_EXPIRE = 5;
const isSyncEntities_1 = require("../../../../Common/isSyncEntities");
let CommandInstance = CommandInstance_1 = class CommandInstance extends BaseEntity_1.default {
    refreshExpirationDate(msToIncrease = DEFAULT_REFRESH_MILISECONDS_INTERVAL) {
        return __awaiter(this, void 0, void 0, function* () {
            const commandInstanceServices = new CommandInstanceServices_1.default();
            const date = new Date();
            date.setMilliseconds(date.getMilliseconds() + msToIncrease);
            date.setMinutes(date.getMinutes() + DEFAULT_MINUTES_TO_EXPIRE);
            this.expirationDate = date;
        });
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CommandInstance.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CommandInstance.prototype, "command", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommandInstance.prototype, "pid", void 0);
__decorate([
    typeorm_1.Column({ precision: 6 }),
    __metadata("design:type", Date)
], CommandInstance.prototype, "expirationDate", void 0);
__decorate([
    typeorm_1.BeforeUpdate(),
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommandInstance.prototype, "refreshExpirationDate", null);
CommandInstance = CommandInstance_1 = __decorate([
    typeorm_1.Entity({ synchronize: isSyncEntities_1.isSyncEntities(CommandInstance_1) })
], CommandInstance);
exports.default = CommandInstance;
//# sourceMappingURL=CommandInstance.js.map