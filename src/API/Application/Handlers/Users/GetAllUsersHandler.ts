import GetAllUsersCommand from '../../Commands/Users/GetAllUsersCommand';
import UserServices from '../../Services/Users/UserServices';

export default class GetAllUsersHandler {
  private userServices: UserServices;

  constructor() {
    this.userServices = new UserServices();
  }

  public async  handle(command : GetAllUsersCommand) {
    // TODO: Implement bussines logic
    let users = await this.userServices.getAll();
    let usersRolesWarehouse = await this.userServices.getAllUsersRolesWarehouse();
    // return await this.userServices.getAll();
    return { users,usersRolesWarehouse };
  }


}
