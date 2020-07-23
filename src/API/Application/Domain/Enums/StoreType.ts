
/**
 *  @swagger
 *
 *  definitions:
 *    StoreType:
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
 *    DataResponseStoreTypes:
 *      type: object
 *      properties:
 *        data:
 *          type: array
 *          items:
 *            $ref: '#/definitions/StoreType'
 *        message:
 *          type: string
 *        code:
 *          type: integer
 */

export const storeType = [
  {
    id: 1,
    name: 'in',
  },
  {
    id: 2,
    name: 'out',
  },
];