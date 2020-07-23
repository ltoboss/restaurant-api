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
var OAuth2Token_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const BaseEntity_1 = __importDefault(require("./BaseEntity"));
const User_1 = __importDefault(require("./User/User"));
const Log_1 = __importDefault(require("./Log/Log"));
const isSyncEntities_1 = require("../../../Common/isSyncEntities");
let OAuth2Token = OAuth2Token_1 = class OAuth2Token extends BaseEntity_1.default {
    setUpdatedAt(date) {
        let setDate = date;
        if (typeof date === 'undefined') {
            setDate = new Date();
        }
        this.updatedAt = setDate;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], OAuth2Token.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OAuth2Token.prototype, "accessToken", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], OAuth2Token.prototype, "accessTokenExpiresAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OAuth2Token.prototype, "refreshToken", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], OAuth2Token.prototype, "refreshTokenExpiresAt", void 0);
__decorate([
    typeorm_1.ManyToOne(type => User_1.default, user => user.tokens),
    typeorm_1.JoinTable(),
    __metadata("design:type", User_1.default)
], OAuth2Token.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(type => Log_1.default, log => log.user),
    __metadata("design:type", Array)
], OAuth2Token.prototype, "logs", void 0);
__decorate([
    typeorm_1.Column({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], OAuth2Token.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], OAuth2Token.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.BeforeUpdate(),
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", void 0)
], OAuth2Token.prototype, "setUpdatedAt", null);
OAuth2Token = OAuth2Token_1 = __decorate([
    typeorm_1.Entity({ synchronize: isSyncEntities_1.isSyncEntities(OAuth2Token_1) })
], OAuth2Token);
exports.default = OAuth2Token;
//# sourceMappingURL=OAuth2Token.js.map