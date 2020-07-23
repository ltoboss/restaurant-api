import GetAllTablesCommand from '../../Commands/Tables/GetAllTablesCommand';
import TableServices from '../../Services/Tables/TablesServices';

export default class GetAllTablesHandler {
  private tableServices: TableServices;

  constructor() {
    this.tableServices = new TableServices();
  }

  public async  handle(command : GetAllTablesCommand) {
    return await this.tableServices.getAll();
  }


}
