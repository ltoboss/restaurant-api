import DeleteLogCommand from '../../Commands/Logs/DeleteLogCommand';
export default class DeleteLogHandler {
    private logServices;
    constructor();
    handle(command: DeleteLogCommand): Promise<import("typeorm").DeleteResult>;
}
