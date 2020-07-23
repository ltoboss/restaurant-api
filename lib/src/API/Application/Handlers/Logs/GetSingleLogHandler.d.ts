import GetSingleLogCommand from '../../Commands/Logs/GetSingleLogCommand';
export default class GetSingleLogHandler {
    private logServices;
    constructor();
    handle(command: GetSingleLogCommand): Promise<import("../../Domain/Entities/Log/Log").default[]>;
}
