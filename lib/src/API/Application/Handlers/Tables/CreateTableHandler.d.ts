import Table from '../../Domain/Entities/Table';
import CreateTableCommand from '../../Commands/Tables/CreateTableCommand';
export default class CreateTableHandler {
    private zoneServices;
    constructor();
    handle(command: CreateTableCommand): Promise<Table>;
}
