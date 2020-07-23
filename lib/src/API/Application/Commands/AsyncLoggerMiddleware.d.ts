import { Middleware } from 'simple-command-bus';
import '../../Common/Logger';
export default class AsyncLoggerMiddleware extends Middleware {
    private logger;
    constructor(logger: any);
    execute(command: any, next: any): Promise<any>;
}
