"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeServiceRequest = void 0;
const hydra_1 = __importDefault(require("hydra"));
var HydraService;
(function (HydraService) {
    HydraService.makeServiceRequest = function makeServiceRequest(serviceName, method, path, body = {}, headers = {}) {
        const thisServiceName = hydra_1.default.getServiceName();
        const thisServiceIntanceID = hydra_1.default.getInstanceID();
        let message = hydra_1.default.createUMFMessage({
            headers,
            to: `${serviceName}:[${method}]${path}`,
            from: `${thisServiceName}:${thisServiceIntanceID}`,
            body,
            fallbackToQueue: true
        });
        return hydra_1.default.makeAPIRequest(message);
    };
})(HydraService || (HydraService = {}));
exports.default = HydraService;
exports.makeServiceRequest = HydraService.makeServiceRequest;
//# sourceMappingURL=HydraService.js.map