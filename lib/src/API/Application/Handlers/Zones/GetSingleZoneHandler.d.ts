import GetSingleZoneCommand from '../../Commands/Zones/GetSingleZoneCommand';
export default class GetSingleZoneHandler {
    private zoneServices;
    constructor();
    handle(command: GetSingleZoneCommand): Promise<import("../../Domain/Entities/Zone").default>;
}
