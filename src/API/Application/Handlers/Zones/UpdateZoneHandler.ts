import Zone from '../../Domain/Entities/Zone';
import ZoneServices from '../../Services/Zones/ZoneServices';
import CryptoHashPasswordServices from '../../Services/Users/CryptoHashPasswordServices';
import UpdateUserCommand from '../../Commands/Users/UpdateUserCommand';


import commandBus from '../../Commands/CommandBus';
import InvalidArgumentException from '../../Exceptions/InvalidArgumentException';

export default class UpdateZoneHandler {
  private zoneServices: ZoneServices;

  constructor() {
    this.zoneServices = new ZoneServices();
  }

  public async  handle(command : UpdateUserCommand) {
    let zone = new Zone(new Zone(command));
    const zoneExist = await this.zoneServices.getById(zone.id);
    return await this.zoneServices.store(zoneExist);
  }
}
