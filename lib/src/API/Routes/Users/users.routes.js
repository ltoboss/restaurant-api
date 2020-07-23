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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const UserController_1 = __importDefault(require("../../Controllers/UserController"));
const router = express.Router();
const userController = new UserController_1.default();
router.get('/', (req, res, next) => {
    userController.index(req, res, next);
});
router.post('/', (req, res, next) => {
    userController.store(req, res, next);
});
router.get('/:id([0-9]+)', (req, res, next) => {
    userController.show(req, res, next);
});
router.put('/:id([0-9]+)', (req, res, next) => {
    userController.update(req, res, next);
});
router.delete('/:id([0-9]+)', (req, res, next) => {
    userController.destroy(req, res, next);
});
exports.default = router;
//# sourceMappingURL=users.routes.js.map