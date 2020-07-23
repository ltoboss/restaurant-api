import GetSingleCommandInstanceCommand from '../../Commands/CommandInstances/GetSingleCommandInstanceCommand';
export default class GetSingleCommandInstanceHandler {
    private commandInstanceServices;
    constructor();
    handle(command: GetSingleCommandInstanceCommand): Promise<import("../../Domain/Entities/Command/CommandInstance").default[]>;
}
