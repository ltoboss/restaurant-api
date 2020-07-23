import * as express from 'express';
import UserController from '../../Controllers/UserController';

const router = express.Router();

const userController = new UserController();

/**
 * @swagger
 * /users:
 *    get:
 *      tags: [
 *          Users
 *      ]
 *      description: Retrive all users
 *      summary: Get users
 *      security:
 *        - api_key
 *      responses:
 *        200:
 *          description: Ok
 */
router.get('/', (req, res, next) => {
  userController.index(req, res, next);
});

/**
 * @swagger
 * /users:
 *    post:
 *      tags: [
 *          Users
 *      ]
 *      description: Creates a new user
 *      summary: POST User
 *      security:
 *        - api_key
 *      parameters:
 *        - in: body
 *          name: user
 *          description: The user to create
 *          schema:
 *            $ref: '#/definitions/NewUser'
 *      responses:
 *        200:
 *          description: Ok
*/
router.post('/', (req, res, next) => {
  userController.store(req, res, next);
});

/**
 * @swagger
 * /users/{id}:
 *    get:
 *      tags: [
 *          Users
 *      ]
 *      description: Retrives a user
 *      summary: GET single User
 *      security:
 *        - api_key
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The id of the user to retrive
 *      responses:
 *        200:
 *          description: A single user
 *          schema:
 *            $ref: '#/definitions/User'
*/
router.get('/:id([0-9]+)', (req, res, next) => {
  userController.show(req, res, next);
});

/**
 * @swagger
 * /users/{id}:
 *    put:
 *      tags: [
 *          Users
 *      ]
 *      description: Updates a single user
 *      summary: PUT single User
 *      security:
 *        - api_key
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The id of the user to update
 *        - in: body
 *          name: user
 *          schema:
 *            $ref: '#/definitions/User'
 *      responses:
 *        200:
 *          description: A single user
 *          schema:
 *            $ref: '#/definitions/User'
*/
router.put('/:id([0-9]+)', (req, res, next) => {
  userController.update(req, res, next);
});

/**
* @swagger
* /users/{id}:
*    delete:
*      tags: [
*          Users
*      ]
*      description: Removes a single user
*      summary: DELETE User
*      security:
*        - api_key
*      parameters:
*        - in: path
*          name: id
*          description: The id of the user to delete
*      responses:
*        200:
*          description: OK
*/
router.delete('/:id([0-9]+)', (req, res, next) => {
  userController.destroy(req, res, next);
});



export default router;
