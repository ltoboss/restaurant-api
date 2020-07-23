import UpsertLogCommand from '../../Commands/Logs/UpsertLogCommand';
import Log from '../../Domain/Entities/Log/Log';
export default class UpsertLogHandler {
    private logServices;
    private validator;
    constructor();
    private validate;
    handle(command: UpsertLogCommand): Promise<Log>;
}
