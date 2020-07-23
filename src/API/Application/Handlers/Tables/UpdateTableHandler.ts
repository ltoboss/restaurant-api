import Table from '../../Domain/Entities/Table';
import TableServices from '../../Services/Tables/TablesServices';
import CryptoHashPasswordServices from '../../Services/Users/CryptoHashPasswordServices';
import UpdateUserCommand from '../../Commands/Users/UpdateUserCommand';


import commandBus from '../../Commands/CommandBus';
import InvalidArgumentException from '../../Exceptions/InvalidArgumentException';

export default class UpdateTableHandler {
  private tableServices: TableServices;

  constructor() {
    this.tableServices = new TableServices();
  }

  public async  handle(command : UpdateUserCommand) {
    let table = new Table(new Table(command));
    const tableExist = await this.tableServices.getById(table.id);
    return await this.tableServices.store(tableExist);
  }
}
