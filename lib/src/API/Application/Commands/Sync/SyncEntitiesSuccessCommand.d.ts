import SingleInstanceCommand from '../SingleInstanceCommand';
export default class SyncEntitiesSuccessCommand extends SingleInstanceCommand {
    private appName;
    constructor(appName: any);
    getAppName(): any;
}
