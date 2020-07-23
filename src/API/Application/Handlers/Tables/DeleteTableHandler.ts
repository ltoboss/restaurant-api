import TableServices from '../../Services/Tables/TablesServices';
import DeleteUserCommand from '../../Commands/Users/DeleteUserCommand';

export default class DeleteTableHandler {
  private tableServices: TableServices;

  constructor() {
    this.tableServices = new TableServices();
  }

  public async handle(command : DeleteUserCommand) {
    const user = await  this.tableServices.getById(command.getId());
    return await this.tableServices.destroy(command.getId());
  }
}
