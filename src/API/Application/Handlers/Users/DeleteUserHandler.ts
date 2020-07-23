import UserServices from '../../Services/Users/UserServices';
import DeleteUserCommand from '../../Commands/Users/DeleteUserCommand';

export default class DeleteUserHandler {
  private userServices: UserServices;

  constructor() {
    this.userServices = new UserServices();
  }

  public async handle(command : DeleteUserCommand) {
    const user = await  this.userServices.getById(command.getId());
    return await this.userServices.destroy(command.getId());
  }
}
