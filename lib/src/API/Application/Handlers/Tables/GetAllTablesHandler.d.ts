import GetAllTablesCommand from '../../Commands/Tables/GetAllTablesCommand';
export default class GetAllTablesHandler {
    private tableServices;
    constructor();
    handle(command: GetAllTablesCommand): Promise<import("../../Domain/Entities/Table").default[]>;
}
