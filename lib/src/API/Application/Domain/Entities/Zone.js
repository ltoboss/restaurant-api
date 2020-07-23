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
var Zone_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const BaseEntity_1 = __importDefault(require("./BaseEntity"));
const isSyncEntities_1 = require("../../../Common/isSyncEntities");
let Zone = Zone_1 = class Zone extends BaseEntity_1.default {
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
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Zone.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Zone.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Zone.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ nullable: false, default: false }),
    __metadata("design:type", Boolean)
], Zone.prototype, "isActive", void 0);
__decorate([
    typeorm_1.Column({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Zone.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Zone.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.BeforeUpdate(),
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", void 0)
], Zone.prototype, "setUpdatedAt", null);
Zone = Zone_1 = __decorate([
    typeorm_1.Entity({ synchronize: isSyncEntities_1.isSyncEntities(Zone_1) }),
    typeorm_1.Unique(['id'])
], Zone);
exports.default = Zone;
//# sourceMappingURL=Zone.js.map