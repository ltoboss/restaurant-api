import GetAllZonesCommand from '../../Commands/Zones/GetAllZonesCommand';
import ZoneServices from '../../Services/Zones/ZoneServices';

export default class GetAllZonesHandler {
  private zoneServices: ZoneServices;

  constructor() {
    this.zoneServices = new ZoneServices();
  }

  public async  handle(command : GetAllZonesCommand) {
    return await this.zoneServices.getAll();
  }


}
