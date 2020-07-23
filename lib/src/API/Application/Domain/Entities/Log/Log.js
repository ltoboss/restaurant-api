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
var Log_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const BaseEntity_1 = __importDefault(require("../BaseEntity"));
const OAuth2Token_1 = __importDefault(require("../OAuth2Token"));
const LogRequest_1 = __importDefault(require("./LogRequest"));
const LogResponse_1 = __importDefault(require("./LogResponse"));
const User_1 = __importDefault(require("../User/User"));
const isSyncEntities_1 = require("../../../../Common/isSyncEntities");
let Log = Log_1 = class Log extends BaseEntity_1.default {
    setIsAvelon() {
        this.isAvelon = Boolean(this.url.match(/^\/Avelon/));
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
], Log.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => User_1.default, user => user.id),
    typeorm_1.JoinColumn(),
    __metadata("design:type", User_1.default)
], Log.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => OAuth2Token_1.default, token => token.logs),
    typeorm_1.JoinColumn(),
    __metadata("design:type", OAuth2Token_1.default)
], Log.prototype, "token", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Log.prototype, "url", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Log.prototype, "method", void 0);
__decorate([
    typeorm_1.OneToOne(type => LogRequest_1.default, request => request.log, { cascade: true, nullable: false }),
    __metadata("design:type", LogRequest_1.default)
], Log.prototype, "request", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Log.prototype, "sendSizeKB", void 0);
__decorate([
    typeorm_1.OneToOne(type => LogResponse_1.default, response => response.log, { cascade: true, nullable: false }),
    __metadata("design:type", LogResponse_1.default)
], Log.prototype, "response", void 0);
__decorate([
    typeorm_1.Column({ type: 'double', nullable: true }),
    __metadata("design:type", Number)
], Log.prototype, "elapsedTimeInS", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Log.prototype, "receiveSizeKB", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Log.prototype, "isAvelon", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Log.prototype, "setIsAvelon", null);
Log = Log_1 = __decorate([
    typeorm_1.Entity({ synchronize: isSyncEntities_1.isSyncEntities(Log_1) })
], Log);
exports.default = Log;
//# sourceMappingURL=Log.js.map