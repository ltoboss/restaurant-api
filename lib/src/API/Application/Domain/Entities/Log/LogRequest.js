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
var LogRequest_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const BaseEntity_1 = __importDefault(require("../BaseEntity"));
const Log_1 = __importDefault(require("./Log"));
const isSyncEntities_1 = require("../../../../Common/isSyncEntities");
let LogRequest = LogRequest_1 = class LogRequest extends BaseEntity_1.default {
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
], LogRequest.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToOne(type => Log_1.default, log => log.request, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Log_1.default)
], LogRequest.prototype, "log", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: "timestamp" }),
    __metadata("design:type", Date)
], LogRequest.prototype, "timestamp", void 0);
__decorate([
    typeorm_1.Column('simple-json', { nullable: true }),
    __metadata("design:type", Object)
], LogRequest.prototype, "body", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LogRequest.prototype, "url", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LogRequest.prototype, "method", void 0);
LogRequest = LogRequest_1 = __decorate([
    typeorm_1.Entity({ synchronize: isSyncEntities_1.isSyncEntities(LogRequest_1) })
], LogRequest);
exports.default = LogRequest;
//# sourceMappingURL=LogRequest.js.map