import GetSingleZoneCommand from '../../Commands/Zones/GetSingleZoneCommand';
import ZoneServices from '../../Services/Zones/ZoneServices';

export default class GetSingleZoneHandler {
  private zoneServices: ZoneServices;

  constructor() {
    this.zoneServices = new ZoneServices();
  }

  public async  handle(command : GetSingleZoneCommand) {
    return await this.zoneServices.getById(command.getId());
  }
}
