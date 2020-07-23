import ZoneServices from '../../Services/Zones/ZoneServices';
import DeleteUserCommand from '../../Commands/Users/DeleteUserCommand';

export default class DeleteZoneHandler {
  private zoneServices: ZoneServices;

  constructor() {
    this.zoneServices = new ZoneServices();
  }

  public async handle(command : DeleteUserCommand) {
    const user = await  this.zoneServices.getById(command.getId());
    return await this.zoneServices.destroy(command.getId());
  }
}
