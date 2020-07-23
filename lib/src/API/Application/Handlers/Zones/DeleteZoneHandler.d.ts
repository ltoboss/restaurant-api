import DeleteUserCommand from '../../Commands/Users/DeleteUserCommand';
export default class DeleteZoneHandler {
    private zoneServices;
    constructor();
    handle(command: DeleteUserCommand): Promise<number>;
}
