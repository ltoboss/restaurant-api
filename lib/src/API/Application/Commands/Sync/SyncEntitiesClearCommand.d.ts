import SingleInstanceCommand from '../SingleInstanceCommand';
export default class SyncEntitiesClearCommand extends SingleInstanceCommand {
    private appName;
    constructor(appName: any);
    getAppName(): any;
}
