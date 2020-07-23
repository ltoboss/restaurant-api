import GetSingleTableCommand from '../../Commands/Tables/GetSingleTableCommand';
export default class GetSingleTableHandler {
    private tableServices;
    constructor();
    handle(command: GetSingleTableCommand): Promise<import("../../Domain/Entities/Table").default>;
}
