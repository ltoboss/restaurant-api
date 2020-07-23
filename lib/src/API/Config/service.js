"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = void 0;
const package_json_1 = __importDefault(require("../../../package.json"));
let serviceName = process.env.SERVICE_NAME || package_json_1.default.name || "api-restaurant";
serviceName = serviceName.replace(/^[^\d\w]/, "")
    .replace(/[^\w\d]+/, '-');
exports.service = {
    "environment": process.env.NODE_ENV || "development",
    "hydra": {
        serviceName,
        "serviceIP": process.env.SERVICE_IP || "127.0.0.1",
        "servicePort": process.env.APP_PORT || 3000,
        "serviceType": process.env.SERVICE_TYPE || serviceName,
        "serviceDescription": process.env.SERVICE_DESCRIPTION || package_json_1.default.description || "Sorter communication",
        "redis": {
            "url": process.env.REDIS_SERVER_URL || "redis://127.0.0.1:6379/15",
            "host": process.env.REDIS_SERVER_HOST || "127.0.0.1",
            "port": process.env.REDIS_SERVER_PORT || 6379,
            "db": process.env.REDIS_SERVER_DB || 15,
        }
    }
};
exports.default = exports.service;
//# sourceMappingURL=service.js.map