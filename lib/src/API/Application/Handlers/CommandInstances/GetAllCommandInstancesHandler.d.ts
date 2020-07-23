import GetAllCommandInstancesCommand from '../../Commands/CommandInstances/GetAllCommandInstancesCommand';
export default class GetAllCommandInstancesHandler {
    private commandInstanceServices;
    constructor();
    handle(command: GetAllCommandInstancesCommand): Promise<import("../../Domain/Entities/Command/CommandInstance").default[]>;
}
