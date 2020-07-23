import GetAllZonesCommand from '../../Commands/Zones/GetAllZonesCommand';
export default class GetAllZonesHandler {
    private zoneServices;
    constructor();
    handle(command: GetAllZonesCommand): Promise<import("../../Domain/Entities/Zone").default[]>;
}
