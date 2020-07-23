export enum GenerationTypes {
  TRAVEL = 1,
  ANTIQUITY = 2,
}

/**
 *  @swagger
 *
 *  definitions:
 *    GenerationTypes:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        name:
 *          type: string
 */

/**
 *  @swagger
 *
 *  definitions:
 *    DataResponseGenerationTypes:
 *      type: object
 *      properties:
 *        data:
 *          type: array
 *          items:
 *            $ref: '#/definitions/GenerationTypes'
 *        message:
 *          type: string
 *        code:
 *          type: integer
 */

export const generationTypes = [
  {
    id: GenerationTypes.TRAVEL,
    name: 'Recorrido'
  },
  {
    id: GenerationTypes.ANTIQUITY,
    name: 'Antigüedad'
  },
];

export const generationTypesValidSaved = [
  GenerationTypes.TRAVEL,
  GenerationTypes.ANTIQUITY
];