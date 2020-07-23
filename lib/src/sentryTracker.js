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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentryErrorHandler = exports.sentryRequestHandler = void 0;
const sentryNode = __importStar(require("@sentry/node"));
const dsn = process.env.KRACK_SENTRY_DSN || 'https://6de62514786645c0ae20f6bb283f7c4b@sentry.io/1794427';
if (dsn)
    sentryNode.init({ dsn });
exports.sentryRequestHandler = sentryNode.Handlers.requestHandler;
exports.sentryErrorHandler = sentryNode.Handlers.errorHandler;
//# sourceMappingURL=sentryTracker.js.map