"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const _ = __importStar(require("lodash"));
class BaseEntity extends typeorm_1.BaseEntity {
    constructor(object) {
        super();
        _.assign(this, object);
    }
    setUpdatedAt(date) {
        let setDate = date;
        if (typeof date === 'undefined') {
            setDate = new Date();
        }
        this.updatedAt = setDate;
    }
    toJSON() {
        const result = {};
        const object = this;
        try {
            Object.keys(object).forEach(function (k) {
                if (typeof object[k] !== 'function') {
                    const matches = k.match(/^__(\w+)__$/);
                    if (matches && object[k]) {
                        result[matches[1]] = object[matches[0]];
                    }
                    else if (!k.match(/^__\w+?$/)) {
                        result[k] = object[k];
                    }
                }
            });
        }
        catch (e) {
            console.error(e);
        }
        return result;
    }
}
__decorate([
    typeorm_1.Column({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.BeforeUpdate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", void 0)
], BaseEntity.prototype, "setUpdatedAt", null);
exports.default = BaseEntity;
//# sourceMappingURL=BaseEntity.js.map