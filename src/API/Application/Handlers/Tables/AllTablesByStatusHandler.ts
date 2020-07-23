import TableServices from '../../Services/Tables/TablesServices';
import AllTablesByStatusCommand from '../../Commands/Tables/AllTablesByStatusCommand';
import * as _ from 'lodash';

export default class AllTablesByStatusHandler {
  private zoneServices: TableServices;

  constructor() {
    this.zoneServices = new TableServices();
  }

  public async handle(command: AllTablesByStatusCommand) {
    return await this.zoneServices.getByStatus(command.getStatus());
  }
}
