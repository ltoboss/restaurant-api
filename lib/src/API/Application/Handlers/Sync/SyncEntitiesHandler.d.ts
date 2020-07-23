import SyncEntitiesCommand from '../../Commands/Sync/SyncEntitiesCommand';
export default class SyncEntitiesHandler {
    private syncEntitiesServices;
    constructor();
    handle(command: SyncEntitiesCommand): Promise<boolean>;
}
