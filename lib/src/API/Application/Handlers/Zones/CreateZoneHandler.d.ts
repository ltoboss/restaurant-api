import Zone from '../../Domain/Entities/Zone';
import CreateZoneCommand from '../../Commands/Zones/CreateZoneCommand';
export default class CreateZoneHandler {
    private zoneServices;
    constructor();
    handle(command: CreateZoneCommand): Promise<Zone>;
}
