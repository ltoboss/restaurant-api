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
var SyncEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const BaseEntity_1 = __importDefault(require("./BaseEntity"));
const isSyncEntities_1 = require("../../../Common/isSyncEntities");
let SyncEntity = SyncEntity_1 = class SyncEntity extends BaseEntity_1.default {
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getAppName() {
        return this.appName;
    }
    setAppName(appName) {
        this.appName = appName;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getHash() {
        return this.hash;
    }
    setHash(hash) {
        this.hash = hash;
    }
    getIsUpdated() {
        return this.isUpdated;
    }
    setisUpdated(isUpdated) {
        this.isUpdated = isUpdated;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], SyncEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], SyncEntity.prototype, "appName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], SyncEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], SyncEntity.prototype, "hash", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], SyncEntity.prototype, "isUpdated", void 0);
SyncEntity = SyncEntity_1 = __decorate([
    typeorm_1.Entity({ synchronize: isSyncEntities_1.isSyncEntities(SyncEntity_1) })
], SyncEntity);
exports.default = SyncEntity;
//# sourceMappingURL=SyncEntity.js.map