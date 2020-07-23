import Table from '../../Domain/Entities/Table';
import TableServices from '../../Services/Tables/TablesServices';
import CreateTableCommand from '../../Commands/Tables/CreateTableCommand';

import * as _ from 'lodash';

export default class CreateTableHandler {
  private zoneServices: TableServices;

  constructor() {
    this.zoneServices = new TableServices();
  }

  public async handle(command: CreateTableCommand) {
    return await this.zoneServices.store(new Table(command));
  }
}
