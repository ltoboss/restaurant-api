"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalVariablesValid = exports.globalVariablesTypes = exports.GlobalVariablesType = void 0;
var GlobalVariablesType;
(function (GlobalVariablesType) {
    GlobalVariablesType[GlobalVariablesType["CONSOLIDATED_MINIMUM_ALLOCATION_THRESHOLD"] = 1] = "CONSOLIDATED_MINIMUM_ALLOCATION_THRESHOLD";
})(GlobalVariablesType = exports.GlobalVariablesType || (exports.GlobalVariablesType = {}));
exports.globalVariablesTypes = [
    {
        id: GlobalVariablesType.CONSOLIDATED_MINIMUM_ALLOCATION_THRESHOLD,
        name: 'Umbral mínimo de asignación de consolidado',
    },
];
exports.globalVariablesValid = [
    GlobalVariablesType.CONSOLIDATED_MINIMUM_ALLOCATION_THRESHOLD,
];
//# sourceMappingURL=GlobalVariablesType.js.map