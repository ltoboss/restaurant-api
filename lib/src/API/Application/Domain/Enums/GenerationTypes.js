"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generationTypesValidSaved = exports.generationTypes = exports.GenerationTypes = void 0;
var GenerationTypes;
(function (GenerationTypes) {
    GenerationTypes[GenerationTypes["TRAVEL"] = 1] = "TRAVEL";
    GenerationTypes[GenerationTypes["ANTIQUITY"] = 2] = "ANTIQUITY";
})(GenerationTypes = exports.GenerationTypes || (exports.GenerationTypes = {}));
exports.generationTypes = [
    {
        id: GenerationTypes.TRAVEL,
        name: 'Recorrido'
    },
    {
        id: GenerationTypes.ANTIQUITY,
        name: 'Antigüedad'
    },
];
exports.generationTypesValidSaved = [
    GenerationTypes.TRAVEL,
    GenerationTypes.ANTIQUITY
];
//# sourceMappingURL=GenerationTypes.js.map