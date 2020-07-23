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
var ServiceExpiration_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const BaseEntity_1 = __importDefault(require("./BaseEntity"));
const ServiceType_1 = require("../Enums/ServiceType");
const isSyncEntities_1 = require("../../../Common/isSyncEntities");
let ServiceExpiration = ServiceExpiration_1 = class ServiceExpiration extends BaseEntity_1.default {
    setUpdatedAt() {
        let setDate = new Date();
        this.updatedAt = setDate;
    }
    getId() {
        return this.id;
    }
    getServiceType() {
        return this.serviceType;
    }
    setServiceType(serviceType) {
        this.serviceType = serviceType;
    }
    getExpirationDate() {
        return this.expirationDate;
    }
    setExpirationDate(expirationDate) {
        this.expirationDate = expirationDate;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ServiceExpiration.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: ServiceType_1.ServiceType }),
    __metadata("design:type", Number)
], ServiceExpiration.prototype, "serviceType", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], ServiceExpiration.prototype, "expirationDate", void 0);
__decorate([
    typeorm_1.Column({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ServiceExpiration.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ServiceExpiration.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.BeforeUpdate(),
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServiceExpiration.prototype, "setUpdatedAt", null);
ServiceExpiration = ServiceExpiration_1 = __decorate([
    typeorm_1.Entity({ synchronize: isSyncEntities_1.isSyncEntities(ServiceExpiration_1) })
], ServiceExpiration);
exports.default = ServiceExpiration;
//# sourceMappingURL=ServiceExpiration.js.map