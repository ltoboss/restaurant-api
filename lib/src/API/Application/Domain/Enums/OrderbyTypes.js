"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderbyTypesValid = exports.orderbyTypes = exports.OrderbyTypes = void 0;
var OrderbyTypes;
(function (OrderbyTypes) {
    OrderbyTypes["ASC"] = "ASC";
    OrderbyTypes["DESC"] = "DESC";
})(OrderbyTypes = exports.OrderbyTypes || (exports.OrderbyTypes = {}));
exports.orderbyTypes = [
    {
        id: OrderbyTypes.ASC,
        name: 'ASC',
    },
    {
        id: OrderbyTypes.DESC,
        name: 'DESC',
    },
];
exports.orderbyTypesValid = [
    OrderbyTypes.ASC,
    OrderbyTypes.DESC,
    OrderbyTypes.ASC.toLowerCase(),
    OrderbyTypes.DESC.toLowerCase(),
];
//# sourceMappingURL=OrderbyTypes.js.map