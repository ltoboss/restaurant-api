import CreateTableCommand from '../Application/Commands/Tables/CreateTableCommand';
import GetSingleTableCommand from '../Application/Commands/Tables/GetSingleTableCommand';
import DeleteTableCommand from '../Application/Commands/Tables/DeleteTableCommand';
import GetAllTablesCommand from '../Application/Commands/Tables/GetAllTablesCommand';
import AllTablesByStatusCommand from '../Application/Commands/Tables/AllTablesByStatusCommand';

import InvalidArgumentException from '../Application/Exceptions/InvalidArgumentException';
import { success, error, successDeleted } from '../Common/Result';
import CommandBus from '../Application/Commands/CommandBus';
import * as _ from 'lodash';

export default class TableController {

  constructor() {
  }

  public async index(request, response, next) {
    try {
      const command = new GetAllTablesCommand();
      const result = await CommandBus.handle(command);
      return response.status(200).json(success(result, 'Table list retrieve', 200));
    } catch (e) {
      next(e);
    }
  }

  public async store(request, response, next) {
    try {
      const result = await CommandBus.handle(new CreateTableCommand(request.body));
      return response.status(200).json(success(result, 'Table created', 200));
    } catch (e) {
      next(e);
    }
  }

  public async show(request, response, next) {
    try {
      if (!request.params.id)
        throw new InvalidArgumentException("Table's Id is required");
      const result = await CommandBus.handle(new GetSingleTableCommand(request.params.id));
      return response.status(200).json(success(result, 'Table retrieved', 200));
    } catch (e) {
      next(e);
    }
  }

  public async destroy(request, response, next) {
    try {
      if (!request.params.id)
        throw new InvalidArgumentException("Table's id is required");
      await CommandBus.handle(new DeleteTableCommand(request.params.id));
      return response.status(200).json(successDeleted('Table deleted', 200));
    } catch (e) {
      next(e);
    }
  }

  public async getByStatus(request, response, next){
    try {
      const result = await CommandBus.handle(new AllTablesByStatusCommand(request.body.isActive));
      return response.status(200).json(success(result, 'Table list retrieve', 200));
    } catch (e) {
      next(e);
    }
  }


}
