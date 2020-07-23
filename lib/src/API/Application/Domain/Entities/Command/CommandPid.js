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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var CommandPid_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const BaseEntity_1 = __importDefault(require("../BaseEntity"));
const isSyncEntities_1 = require("../../../../Common/isSyncEntities");
let CommandPid = CommandPid_1 = class CommandPid extends BaseEntity_1.default {
    setUpdatedAt(date) {
        let setDate = date;
        if (typeof date === 'undefined') {
            setDate = new Date();
        }
        this.updatedAt = setDate;
    }
    getId() {
        return this.id;
    }
    getPid() {
        return this.pid;
    }
    setPid(pid) {
        this.pid = pid;
    }
    getAlive() {
        return this.alive;
    }
    setAlive(alive) {
        this.alive = alive;
    }
    getSoftDeleted() {
        return this.softDeleted;
    }
    setSoftDeleted(softDeleted) {
        this.softDeleted = softDeleted;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CommandPid.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommandPid.prototype, "pid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommandPid.prototype, "alive", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommandPid.prototype, "softDeleted", void 0);
__decorate([
    typeorm_1.Column({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], CommandPid.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], CommandPid.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.BeforeUpdate(),
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", void 0)
], CommandPid.prototype, "setUpdatedAt", null);
CommandPid = CommandPid_1 = __decorate([
    typeorm_1.Entity({ synchronize: isSyncEntities_1.isSyncEntities(CommandPid_1) })
], CommandPid);
exports.default = CommandPid;
//# sourceMappingURL=CommandPid.js.map