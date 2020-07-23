import SingleInstanceCommand from '../SingleInstanceCommand';

export default class SyncEntitiesSuccessCommand extends SingleInstanceCommand {
  private appName;
  
  constructor(appName) {
    super();
    this.appName = appName;
  }

  getAppName() {
    return this.appName;
  }
}
