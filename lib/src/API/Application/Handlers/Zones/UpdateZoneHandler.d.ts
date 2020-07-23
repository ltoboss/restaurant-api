import Zone from '../../Domain/Entities/Zone';
import UpdateUserCommand from '../../Commands/Users/UpdateUserCommand';
export default class UpdateZoneHandler {
    private zoneServices;
    constructor();
    handle(command: UpdateUserCommand): Promise<Zone>;
}
