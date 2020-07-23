"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LoggerMiddleware_1 = require("../Middlewares/LoggerMiddleware");
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_json_1 = __importDefault(require("./../Config/swagger.json"));
const test_routes_1 = __importDefault(require("./test.routes"));
const zones_routes_1 = __importDefault(require("./Zones/zones.routes"));
const tables_routes_1 = __importDefault(require("./Tables/tables.routes"));
const router = express_1.default.Router();
const specs = swagger_jsdoc_1.default({ swaggerDefinition: swagger_json_1.default, apis: ['../../API/Routes/**/*'], basePath: swagger_json_1.default.basePath });
router.use(LoggerMiddleware_1.logRequest);
router.use(test_routes_1.default);
router.use('/api/zones', zones_routes_1.default);
router.use('/api/tables', tables_routes_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map