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
const crypto_1 = __importDefault(require("crypto"));
const dotenv_1 = __importDefault(require("dotenv"));
const SameRequestInAShortPeriod_1 = __importDefault(require("../Application/Exceptions/SameRequestInAShortPeriod"));
dotenv_1.default.config();
const timeBeetweenRequests = process.env['TIME_BETWEEN_REQUESTS_NS'];
const timeToLive = timeBeetweenRequests ?
    Number(timeBeetweenRequests) :
    1000000000;
function getRequestSignature(req) {
    const requestSource = `${req.ip}`;
    const requestString = `${req.method} ${req.originalUrl}`;
    const requestHeaderString = `${req.headers.host} ${req.headers['user-agent']} ${req.headers.authorization}`;
    const body = `${JSON.stringify(req.body)} ${JSON.stringify(req.params)}`;
    const requestIdentifier = `${requestSource} ${requestString} ${requestHeaderString} ${body}`;
    const hash = crypto_1.default.createHash('md5').update(requestIdentifier).digest('hex');
    return hash;
}
function clearBuffer(app) {
    if (!app.locals.buffer)
        app.locals.buffer = [];
    app.locals.buffer = app.locals.buffer.filter((buffer) => {
        const timeDiff = process.hrtime(buffer.createdAt);
        return (timeDiff[0] * (Math.pow(10, 9)) + timeDiff[1] <= timeToLive);
    });
    return app.locals.buffer;
}
function requestExists(reqSignature, buffer) {
    return buffer.find((reqIden) => reqIden.signature == reqSignature);
}
function requestFirewall(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        req.app.locals.buffer = clearBuffer(req.app);
        const createdAt = process.hrtime();
        const signature = getRequestSignature(req);
        const requestIdentifier = {
            createdAt,
            signature,
        };
        if (requestExists(signature, req.app.locals.buffer)) {
            return next(new SameRequestInAShortPeriod_1.default());
        }
        req.app.locals.buffer.push(requestIdentifier);
        next();
    });
}
exports.default = requestFirewall;
//# sourceMappingURL=RequestFirewall.js.map