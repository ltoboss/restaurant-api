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
var Table_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const BaseEntity_1 = __importDefault(require("./BaseEntity"));
const Zone_1 = __importDefault(require("./Zone"));
const isSyncEntities_1 = require("../../../Common/isSyncEntities");
let Table = Table_1 = class Table extends BaseEntity_1.default {
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
    toJSON() {
        const user = Object.assign(this);
        return {
            id: this.id,
            name: this.name,
            size: this.size,
            zone: this.zone,
            isActive: this.isActive
        };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Table.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Table.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Table.prototype, "size", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Zone_1.default, zone => zone.id),
    __metadata("design:type", Zone_1.default)
], Table.prototype, "zone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Table.prototype, "isActive", void 0);
__decorate([
    typeorm_1.Column({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Table.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Table.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.BeforeUpdate(),
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", void 0)
], Table.prototype, "setUpdatedAt", null);
Table = Table_1 = __decorate([
    typeorm_1.Entity({ synchronize: isSyncEntities_1.isSyncEntities(Table_1) }),
    typeorm_1.Unique(['id'])
], Table);
exports.default = Table;
//# sourceMappingURL=Table.js.map