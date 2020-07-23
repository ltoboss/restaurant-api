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
const HydraService_1 = require("../Common/HydraService");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/api/atlas-test', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({ response: 'Ok' });
}));
router.post('/api/proxy-test', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const headers = req.headers;
    delete headers['content-type'];
    const response = yield HydraService_1.makeServiceRequest('sga-api', req.method, '/api/warehouses/find', req.body, headers);
    res.send(response);
}));
exports.default = router;
//# sourceMappingURL=test.routes.js.map