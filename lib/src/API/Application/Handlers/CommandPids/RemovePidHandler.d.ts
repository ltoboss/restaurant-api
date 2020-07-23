import RemovePidCommand from '../../Commands/CommandPids/RemovePidCommand';
export default class RemoveCommandPidHandler {
    private commandPidsServices;
    private commandInstanceServices;
    private serviceExpirationServices;
    constructor();
    handle(command: RemovePidCommand): Promise<void>;
}
