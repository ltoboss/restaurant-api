"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const argv = require('yargs').argv;
const seederConfiguration_1 = __importDefault(require("../Config/seederConfiguration"));
function seederJsonSource(jsonName) {
    return argv.test ? require(`${seederConfiguration_1.default.routeTest}${jsonName}`) :
        require(`${seederConfiguration_1.default.route}${jsonName}`);
}
exports.default = seederJsonSource;
//# sourceMappingURL=SeederJsonSource.js.map