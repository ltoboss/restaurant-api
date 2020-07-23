import CreateLogCommand from '../../Commands/Logs/CreateLogCommand';
import Log from '../../Domain/Entities/Log/Log';
export default class CreateLogHandler {
    private logServices;
    private validator;
    constructor();
    private validate;
    handle(command: CreateLogCommand): Promise<Log>;
}
