import CreateZoneCommand from '../Application/Commands/Zones/CreateZoneCommand';
import GetSingleZoneCommand from '../Application/Commands/Zones/GetSingleZoneCommand';
import DeleteZoneCommand from '../Application/Commands/Zones/DeleteZoneCommand';
import GetAllZonesCommand from '../Application/Commands/Zones/GetAllZonesCommand';
import AllZonesByStatusCommand from '../Application/Commands/Zones/AllZonesByStatusCommand';

import InvalidArgumentException from '../Application/Exceptions/InvalidArgumentException';
import { success, error, successDeleted } from '../Common/Result';
import CommandBus from '../Application/Commands/CommandBus';
import * as _ from 'lodash';

export default class UserController {

  constructor() {
  }

  public async index(request, response, next) {
    try {
      const command = new GetAllZonesCommand();
      const result = await CommandBus.handle(command);
      return response.status(200).json(success(result, 'Zone list retrieve', 200));
    } catch (e) {
      next(e);
    }
  }

  public async store(request, response, next) {
    try {
      const result = await CommandBus.handle(new CreateZoneCommand(request.body));
      return response.status(200).json(success(result, 'Zone created', 200));
    } catch (e) {
      next(e);
    }
  }

  public async show(request, response, next) {
    try {
      if (!request.params.id)
        throw new InvalidArgumentException("Zone's Id is required");
      const result = await CommandBus.handle(new GetSingleZoneCommand(request.params.id));
      return response.status(200).json(success(result, 'Zone retrieved', 200));
    } catch (e) {
      next(e);
    }
  }

  public async destroy(request, response, next) {
    try {
      if (!request.params.id)
        throw new InvalidArgumentException("Zone's id is required");
      await CommandBus.handle(new DeleteZoneCommand(request.params.id));
      return response.status(200).json(successDeleted('Zone deleted', 200));
    } catch (e) {
      next(e);
    }
  }

  public async getByStatus(request, response, next){
    try {
      const result = await CommandBus.handle(new AllZonesByStatusCommand(request.body.isActive));
      return response.status(200).json(success(result, 'Zone list retrieve', 200));
    } catch (e) {
      next(e);
    }
  }


}
