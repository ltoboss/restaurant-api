import AllTablesByStatusCommand from '../../Commands/Tables/AllTablesByStatusCommand';
export default class AllTablesByStatusHandler {
    private zoneServices;
    constructor();
    handle(command: AllTablesByStatusCommand): Promise<import("../../Domain/Entities/Table").default[]>;
}
