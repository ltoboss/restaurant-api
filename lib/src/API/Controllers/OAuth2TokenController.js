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
const oauth2_1 = __importDefault(require("../Config/oauth2"));
const oauth2_server_1 = __importDefault(require("oauth2-server"));
const Result_1 = require("../Common/Result");
const JsonResult_1 = __importDefault(require("../Common/JsonResult"));
const UserServices_1 = __importDefault(require("../Application/Services/Users/UserServices"));
class OAuth2TokenController {
    constructor() {
        this.accessPermitionsDictionary = {
            'user-time': null,
            'products': null,
            'labels': null,
            'warehouses-management': null,
            'workwaves-scheduled': null,
            'workwaves-templates': null,
            'workwaves-history': null,
            'user-management': null,
            'operator-parametrization': null,
            'roles': null,
            'warehouses': null,
            'warehouses-group': null,
            'group-to-warehouse': null,
            'jails': null,
            'pallets': null,
            'logout': null,
            'positioning': null,
            'picking-task': null,
            'settings': null,
            'positioning-manual': null,
            'picking-tasks-manual': null,
            'tariff-al': null,
            'tariff-sga': null,
            'reception': null,
            'calendar': null,
            'building': null,
            'empty-carrier': null,
            'print-tags': null,
            'print-packing': null,
            'packing-seal': null,
            'packing-seal-manual': null,
            'print-ref-tag-manual': null,
            'print-price-tag-manual': null,
            'print-product': null,
            'print-product-manual': null,
            'print-products-received': null,
            'products-info': null,
            'pickings-execution': null,
            'incidences': null,
            'sorter-input': null,
            'sorter-output': null,
            'sorter-template-selection': null,
            'state-expedition-avelon': null,
            'avelonProviders': null,
            'send-empty-packing': null
        };
    }
    requestAccessToken(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            this.userServices = new UserServices_1.default();
            const oauth = new oauth2_server_1.default(oauth2_1.default);
            const Request = oauth2_server_1.default.Request;
            const Response = oauth2_server_1.default.Response;
            if (request.body && !request.body.scope) {
                delete request.body.scope;
            }
            try {
                const token = yield oauth.token(new Request(request), new Response(response));
                let user = yield token.user;
                this.accessPermitionsDictionary['user-time'] = false;
                this.accessPermitionsDictionary['roles'] = true;
                this.accessPermitionsDictionary['logout'] = true;
                this.accessPermitionsDictionary['settings'] = true;
                let userComplete = yield this.userServices.getById(user.id);
                const tokenData = {
                    access_token: token.accessToken,
                    access_token_expires_at: token.accessTokenExpiresAt,
                    refresh_token: token.refreshToken,
                    refresh_token_expires_at: token.refreshTokenExpiresAt,
                    user: userComplete,
                    accessPermitionsDictionary: this.accessPermitionsDictionary
                };
                return response.status(200).json(Result_1.success(tokenData, 'Access Token information retrieved', 200));
            }
            catch (error) {
                return response.status(401).json(JsonResult_1.default({}, error.message, error.code));
            }
        });
    }
    revokeToken(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield request.user;
            yield request.token.remove();
            return response.status(200).json(Result_1.success({}, 'Access token revoked', 200));
        });
    }
}
exports.default = OAuth2TokenController;
//# sourceMappingURL=OAuth2TokenController.js.map