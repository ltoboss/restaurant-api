import SingleInstanceCommand from '../SingleInstanceCommand';

export default class SyncEntitiesClearCommand extends SingleInstanceCommand {
  private appName;
  
  constructor(appName) {
    super();
    this.appName = appName;
  }

  getAppName() {
    return this.appName;
  }
}
