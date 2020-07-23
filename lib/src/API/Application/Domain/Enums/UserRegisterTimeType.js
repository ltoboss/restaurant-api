"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerTimeValid = exports.userRegisterTimeTypes = exports.RegisterTimeType = void 0;
var RegisterTimeType;
(function (RegisterTimeType) {
    RegisterTimeType[RegisterTimeType["INPUT"] = 1] = "INPUT";
    RegisterTimeType[RegisterTimeType["OUTPUT"] = 2] = "OUTPUT";
})(RegisterTimeType = exports.RegisterTimeType || (exports.RegisterTimeType = {}));
exports.userRegisterTimeTypes = [
    {
        id: RegisterTimeType.INPUT,
        name: 'Entrada',
    },
    {
        id: RegisterTimeType.OUTPUT,
        name: 'Salida',
    }
];
exports.registerTimeValid = [
    RegisterTimeType.INPUT,
    RegisterTimeType.OUTPUT,
];
//# sourceMappingURL=UserRegisterTimeType.js.map