import SyncEntitiesSuccessCommand from '../../Commands/Sync/SyncEntitiesSuccessCommand';
export default class SyncEntitiesClearHandler {
    private syncEntitiesServices;
    constructor();
    handle(command: SyncEntitiesSuccessCommand): Promise<boolean>;
}
