import GetAllLogsCommand from '../../Commands/Logs/GetAllLogsCommand';
export default class GetAllLogsHandler {
    private logServices;
    constructor();
    handle(command: GetAllLogsCommand): Promise<import("../../Domain/Entities/Log/Log").default[]>;
}
