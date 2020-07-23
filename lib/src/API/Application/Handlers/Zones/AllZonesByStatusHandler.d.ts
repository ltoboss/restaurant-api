import Zone from '../../Domain/Entities/Zone';
import AllZonesByStatusCommand from '../../Commands/Zones/AllZonesByStatusCommand';
export default class AllZonesByStatusHandler {
    private zoneServices;
    constructor();
    handle(command: AllZonesByStatusCommand): Promise<Zone[]>;
}
