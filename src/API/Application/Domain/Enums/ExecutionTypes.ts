export enum ExecutionTypes {
  MANUALLY = 1,
  AUTOMATIC_CALENDAR = 2,
}

/**
 *  @swagger
 *
 *  definitions:
 *    ExecutionTypes:
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
 *    DataResponseExecutionTypes:
 *      type: object
 *      properties:
 *        data:
 *          type: array
 *          items:
 *            $ref: '#/definitions/ExecutionTypes'
 *        message:
 *          type: string
 *        code:
 *          type: integer
 */

export const executionTypes = [
  {
    id: ExecutionTypes.MANUALLY,
    name: 'Manualmente'
  },
  {
    id: ExecutionTypes.AUTOMATIC_CALENDAR,
    name: 'Automático Calendario'
  },
];