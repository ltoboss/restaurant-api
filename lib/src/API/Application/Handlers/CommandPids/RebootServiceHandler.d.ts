import RebootServiceCommand from '../../Commands/CommandPids/RebootServiceCommand';
export default class RemoveCommandPidHandler {
    private serviceExpirationServices;
    constructor();
    handle(command: RebootServiceCommand): Promise<void>;
}
