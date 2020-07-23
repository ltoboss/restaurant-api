"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executionTypes = exports.ExecutionTypes = void 0;
var ExecutionTypes;
(function (ExecutionTypes) {
    ExecutionTypes[ExecutionTypes["MANUALLY"] = 1] = "MANUALLY";
    ExecutionTypes[ExecutionTypes["AUTOMATIC_CALENDAR"] = 2] = "AUTOMATIC_CALENDAR";
})(ExecutionTypes = exports.ExecutionTypes || (exports.ExecutionTypes = {}));
exports.executionTypes = [
    {
        id: ExecutionTypes.MANUALLY,
        name: 'Manualmente'
    },
    {
        id: ExecutionTypes.AUTOMATIC_CALENDAR,
        name: 'Automático Calendario'
    },
];
//# sourceMappingURL=ExecutionTypes.js.map