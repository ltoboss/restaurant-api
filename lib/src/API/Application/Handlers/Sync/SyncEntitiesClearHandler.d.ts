import SyncEntitiesClearCommand from '../../Commands/Sync/SyncEntitiesClearCommand';
export default class SyncEntitiesClearHandler {
    private syncEntitiesServices;
    constructor();
    handle(command: SyncEntitiesClearCommand): Promise<boolean>;
}
