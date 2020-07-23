import Log from '../Domain/Entities/Log/Log';
import { Middleware } from 'simple-command-bus';
import '../../Common/Logger';

export default class AsyncLoggerMiddleware extends Middleware {
  private logger;

  constructor(logger) {
    super();
    this.logger = logger;
  }

  async execute(command, next) {
    this.logger.debug('Before command: [' + new Date().toJSON() + ']', command);
    const returnValue = await next(command)
    this.logger.debug('After command result: [' + new Date().toJSON() + ']', command, returnValue, "\n");

    return returnValue;
  }
}
