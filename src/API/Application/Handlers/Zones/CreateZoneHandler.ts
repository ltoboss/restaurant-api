import Zone from '../../Domain/Entities/Zone';
import ZoneServices from '../../Services/Zones/ZoneServices';
import CreateZoneCommand from '../../Commands/Zones/CreateZoneCommand';

import * as _ from 'lodash';

export default class CreateZoneHandler {
  private zoneServices: ZoneServices;

  constructor() {
    this.zoneServices = new ZoneServices();
  }

  public async handle(command: CreateZoneCommand) {
    return await this.zoneServices.store(new Zone(command));
  }
}
