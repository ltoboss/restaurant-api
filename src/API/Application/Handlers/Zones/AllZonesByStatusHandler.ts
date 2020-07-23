import Zone from '../../Domain/Entities/Zone';
import ZoneServices from '../../Services/Zones/ZoneServices';
import AllZonesByStatusCommand from '../../Commands/Zones/AllZonesByStatusCommand';
import * as _ from 'lodash';

export default class AllZonesByStatusHandler {
  private zoneServices: ZoneServices;

  constructor() {
    this.zoneServices = new ZoneServices();
  }

  public async handle(command: AllZonesByStatusCommand) {
    return await this.zoneServices.getByStatus(command.getStatus());
  }
}
