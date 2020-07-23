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
exports.logRequest = exports.createLog = exports.endLogging = exports.startLogging = void 0;
const Log_1 = __importDefault(require("../Application/Domain/Entities/Log/Log"));
function hrtime2number(hrtime) {
    return hrtime[0] + hrtime[1] / 1e9;
}
const BYTES_SCALE_FACTOR = 1024;
const LOG_MAX_FIELD_LENGTH = 54000;
const DATA_TOO_LONG_FLAG = '=== Removed data: TOO LONG ===';
function startLogging(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const log = new Log_1.default({
            request: req,
            startHrTime: process.hrtime(),
            token: req.token,
            client: req.token ? req.token.client : undefined,
            url: req.url,
            method: req.method,
            sendSizeKB: String(JSON.stringify(req.body)).length / BYTES_SCALE_FACTOR,
        });
        log.request.body = String(JSON.stringify(log.request.body)).length < LOG_MAX_FIELD_LENGTH ? log.request.body : (String(log.request.body).substr(0, LOG_MAX_FIELD_LENGTH - DATA_TOO_LONG_FLAG.length) + DATA_TOO_LONG_FLAG);
        return log.save();
    });
}
exports.startLogging = startLogging;
function endLogging(log, res, data) {
    return __awaiter(this, void 0, void 0, function* () {
        log.elapsedTimeInS = hrtime2number(process.hrtime(log.startHrTime));
        log.response = res;
        const body = !data ? '' :
            (data.length < LOG_MAX_FIELD_LENGTH ? data :
                (data.substr(0, LOG_MAX_FIELD_LENGTH - DATA_TOO_LONG_FLAG.length) + DATA_TOO_LONG_FLAG));
        log.response.body = body;
        log.receiveSizeKB = data ? JSON.stringify(data).length / BYTES_SCALE_FACTOR : undefined;
        return log.save();
    });
}
exports.endLogging = endLogging;
function createLog(req, res, data, startHrTime) {
    return __awaiter(this, void 0, void 0, function* () {
        const elapsedHrTime = process.hrtime(startHrTime);
        const elapsedTimeInMs = hrtime2number(elapsedHrTime);
        const LOG_MAX_FIELD_LENGTH = 65535;
        const DATA_TOO_LONG_FLAG = '=== Removed data: TOO LONG ===';
        const log = new Log_1.default({
            request: req,
            response: res,
            token: req.token,
            client: req.token ? req.token.client : undefined,
            elapsedTimeInS: elapsedTimeInMs,
            url: req.url,
            method: req.method,
            receiveSize: JSON.stringify(data).length,
            sendSize: JSON.stringify(req.body).length,
        });
        log.response.body = JSON.stringify(data).length < LOG_MAX_FIELD_LENGTH ? data : (data.substr(0, LOG_MAX_FIELD_LENGTH - DATA_TOO_LONG_FLAG.length) + DATA_TOO_LONG_FLAG);
        log.request.body = JSON.stringify(log.request.body).length < LOG_MAX_FIELD_LENGTH ? log.request.body : (data.substr(0, LOG_MAX_FIELD_LENGTH - DATA_TOO_LONG_FLAG.length) + DATA_TOO_LONG_FLAG);
        return log.save();
    });
}
exports.createLog = createLog;
function logRequest(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const startHrTime = process.hrtime();
        var oldSend = res.send;
        res.send = function (data) {
            createLog(req, res, data, startHrTime)
                .then((log) => {
                oldSend.apply(res, arguments);
            })
                .catch((err) => {
                oldSend.apply(res, arguments);
            });
        };
        next();
    });
}
exports.logRequest = logRequest;
//# sourceMappingURL=LoggerMiddleware.js.map