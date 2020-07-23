import SingleInstanceCommand from '../SingleInstanceCommand';

export default class SyncEntitiesCommand extends SingleInstanceCommand {
  private appName;
  constructor(appName) {
    super();
    this.appName = appName;
  }

  getAppName() {
    return this.appName;
  }
}
