import GetSingleTableCommand from '../../Commands/Tables/GetSingleTableCommand';
import TableServices from '../../Services/Tables/TablesServices';

export default class GetSingleTableHandler {
  private tableServices: TableServices;

  constructor() {
    this.tableServices = new TableServices();
  }

  public async  handle(command : GetSingleTableCommand) {
    return await this.tableServices.getById(command.getId());
  }
}
