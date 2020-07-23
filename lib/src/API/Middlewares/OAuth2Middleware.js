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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.authorizeRequest = exports.authenticateRequest = void 0;
const oauth2_1 = __importDefault(require("../Config/oauth2"));
const UserPolicies_1 = require("../Application/Policies/UserPolicies");
const oAuth2Server = require('oauth2-server');
const Request = oAuth2Server.Request;
const Response = oAuth2Server.Response;
const oauth = new oAuth2Server(oauth2_1.default);
const _ = __importStar(require("lodash"));
function authenticateRequest(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const request = new Request(req);
        const response = new Response(res);
        try {
            const token = yield oauth.authenticate(request, response);
            req.token = token;
            req.user = yield token.user;
            return next();
        }
        catch (error) {
            error.statusCode = 401;
            return next(error);
        }
    });
}
exports.authenticateRequest = authenticateRequest;
function authorizeRequest(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield req.user;
        if (yield UserPolicies_1.userCanRequest(user, req)) {
            return next();
        }
        const error = new Error('Sorry but... You are not authorized to access this resource');
        _.assign(error, { statusCode: 403 });
        return next(error);
    });
}
exports.authorizeRequest = authorizeRequest;
exports.default = authenticateRequest;
//# sourceMappingURL=OAuth2Middleware.js.map