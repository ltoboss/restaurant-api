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
exports.sorter = exports.openPort = exports.app = void 0;
const utils_1 = require("@krack/utils");
utils_1.loadEnv();
require("./API/Config/configuration");
const sentryTracker_1 = require("./sentryTracker");
const package_json_1 = __importDefault(require("../package.json"));
const service_1 = __importDefault(require("./API/Config/service"));
const hydra_express_1 = __importDefault(require("hydra-express"));
require("reflect-metadata");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const typeorm_1 = require("typeorm");
require("./API/Common/Logger");
const routes_1 = __importDefault(require("./API/Routes/routes"));
const database_1 = __importDefault(require("./API/Config/database"));
const RegisterPids_1 = __importDefault(require("./API/Common/RegisterPids"));
const corsConfiguration = __importStar(require("./API/Config/cors"));
const RequestFirewall_1 = __importDefault(require("./API/Middlewares/RequestFirewall"));
const ErrorHandler_1 = __importDefault(require("./API/Middlewares/ErrorHandler"));
const express_get_endpoints_1 = __importDefault(require("express-get-endpoints"));
const deasync_promise_1 = __importDefault(require("deasync-promise"));
exports.app = hydra_express_1.default.getExpressApp();
global["aawait"] = deasync_promise_1.default;
function openPort() {
    console.log('Starting API');
    return new Promise((resolve, reject) => {
        process.on('uncaughtException', (e) => {
            reject(e);
            console.error(e);
        });
        hydra_express_1.default.init(service_1.default, package_json_1.default.version, () => {
            exports.app.use(routes_1.default);
            const routeList = express_get_endpoints_1.default(exports.app)
                .reduce((list, item) => {
                return list.concat(item.methods.map((method) => {
                    return `[${method.toLowerCase()}]${item.path}`;
                }));
            }, []);
            hydra_express_1.default.getHydra().registerRoutes(routeList);
            exports.app.use(sentryTracker_1.sentryErrorHandler({
                shouldHandleError(error) {
                    if (error.status >= 500) {
                        return true;
                    }
                    return false;
                },
            }));
            exports.app.use(ErrorHandler_1.default);
        }, () => {
            exports.app.use(sentryTracker_1.sentryRequestHandler());
            exports.app.use(body_parser_1.default.json());
            exports.app.use(body_parser_1.default.urlencoded({ extended: true }));
            exports.app.use(cors_1.default(corsConfiguration));
            exports.app.use(RequestFirewall_1.default);
        }).then((serviceConfig) => __awaiter(this, void 0, void 0, function* () {
            console.log(`Service ${serviceConfig.serviceName} started.`);
            console.log(`Review the documentation at http://${serviceConfig.serviceIP}:${serviceConfig.servicePort}/api-docs`);
            yield RegisterPids_1.default(process.pid);
            setInterval(() => __awaiter(this, void 0, void 0, function* () {
                yield RegisterPids_1.default(process.pid);
            }), 60000);
            resolve(exports.app);
        }))
            .catch((err) => { console.error(err); });
    });
}
exports.openPort = openPort;
const sanitizeService = () => {
    const hydraSanitizer = new utils_1.HydraSanitizer(service_1.default.hydra.redis);
    return hydraSanitizer.cleanSingleService(service_1.default.hydra.serviceName);
};
exports.sorter = new Promise((res, rej) => {
    try {
        console.info('Starting DB Connection');
        typeorm_1.createConnection(database_1.default)
            .catch((e) => { console.error(e); })
            .then(() => openPort())
            .catch(e => console.error('Non Fatal', e))
            .finally(sanitizeService)
            .finally(() => res(exports.app));
    }
    catch (e) {
        console.error(e);
    }
});
process.on('uncaughtException', (e) => {
    console.log('An error has occured. error is: %s and stack trace is: %s', e, e.stack);
    console.log('Process will restart now.');
    process.exit(1);
});
exports.default = exports.app;
//# sourceMappingURL=index.js.map