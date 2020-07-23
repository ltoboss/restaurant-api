"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const ServiceExpiration_1 = __importDefault(require("../../Domain/Entities/ServiceExpiration"));
const typeorm_1 = require("typeorm");
class ServiceExpirationsServices {
    constructor() { }
    store(serviceExpiration) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(ServiceExpiration_1.default);
            return yield this.repo.save(serviceExpiration);
        });
    }
    getByService(serviceType) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(ServiceExpiration_1.default);
            return this.repo.findOne({ serviceType });
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(ServiceExpiration_1.default);
            return yield this.repo.delete(id);
        });
    }
    destroyByservice(serviceType) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(ServiceExpiration_1.default);
            return this.repo.delete({ serviceType });
        });
    }
    destroyAll() {
        return __awaiter(this, void 0, void 0, function* () {
            this.repo = typeorm_1.getRepository(ServiceExpiration_1.default);
            return this.repo.delete({});
        });
    }
}
exports.default = ServiceExpirationsServices;
//# sourceMappingURL=ServiceExpirationServices.js.map