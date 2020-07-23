import SingleInstanceCommand from '../SingleInstanceCommand';
export default class SyncEntitiesCommand extends SingleInstanceCommand {
    private appName;
    constructor(appName: any);
    getAppName(): any;
}
