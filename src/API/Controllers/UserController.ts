import UserServices from '../Application/Services/Users/UserServices';
import CreateUserCommand from '../Application/Commands/Users/CreateUserCommand';
import DeleteUserCommand from '../Application/Commands/Users/DeleteUserCommand';
import UpdateUserCommand from '../Application/Commands/Users/UpdateUserCommand';
import GetAllUsersCommand from '../Application/Commands/Users/GetAllUsersCommand';
import GetSingleUserCommand from '../Application/Commands/Users/GetSingleUserCommand';
import InvalidArgumentException from '../Application/Exceptions/InvalidArgumentException';
import { success, error, successDeleted } from '../Common/Result';
import CommandBus from '../Application/Commands/CommandBus';
import * as _ from 'lodash';
import responses from '../Common/Responses';
import ActionNotAllowedException from '../Application/Exceptions/ActionNotAllowedException';
import asyncForeach from '../Common/AsyncForeach';


// User service should not be called here but in the Command Handler

const HTTP_STATUS_ACCEPTED = 202;
const HTTP_STATUS_OK = 200;

export default class UserController {
  private userServices: UserServices;

  constructor() {
    this.userServices = new UserServices();
  }

  public async index(request, response, next) {
    try {
      const command = new GetAllUsersCommand();
      const result = await CommandBus.handle(command);
    
      return response.status(200).json(success(result.users, 'User list retrieve', 200));
    } catch (e) {
      next(e);
    }
  }
  
  
  public async store(request, response, next) {
    try {
      const command = new CreateUserCommand(request.body);
      const result = await CommandBus.handle(command);

      return response.status(201).json(success(result, 'User created', 201));
    } catch (e) {
      next(e);
    }
  }

  public async show(request, response, next) {
    try {
      if (!request.params.id) {
        throw new InvalidArgumentException("User's Id is required");
      }

      const command = new GetSingleUserCommand(request.params.id);
      const result = await CommandBus.handle(command);

      return response.status(200).json(success(result, 'User retrieved', 200));
    } catch (e) {
      next(e);
    }
  }

  // Method Up Date
  public async update(request, response, next) {

    try {
      const command = new UpdateUserCommand(_.assign(request.body, {
        id: Number(request.params.id)}));

      const result = await CommandBus.handle(command);

      return response.status(200).json(success(result, 'User updated', 200));
    } catch (e) {
      next(e);
    }
  }

  public async destroy(request, response, next) {
    try {
      if (!request.params.id) {
        throw new InvalidArgumentException('UserId are required');
      }

      const { id } = await Object.assign(request.user);
      if (Number(id) === Number(request.params.id)) {
        throw new ActionNotAllowedException('The users cannot affect own roles');
      }

      const userCommand = new DeleteUserCommand(request.params.id);
      await CommandBus.handle(userCommand);

      return response.status(200).json(successDeleted('User deleted', 200));
    } catch (e) {
      next(e);
    }
  }

  public async getProfile(request, response, next) {
    if (!request.user) {
      return response.json(error(request.user, 'Cannot get authenticated user', 404));
    }

    const roles = await request.user.roles;
    

    const user = {
      id: request.user.id,
      email: request.user.email,
      name: request.user.name
    };

    return response.json(success(user, 'User profile', 200));
  }
  


}
