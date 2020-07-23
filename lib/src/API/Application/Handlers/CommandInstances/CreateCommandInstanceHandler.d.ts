import CreateCommandInstanceCommand from '../../Commands/CommandInstances/CreateCommandInstanceCommand';
import CommandInstance from '../../Domain/Entities/Command/CommandInstance';
export default class CreateCommandInstanceHandler {
    private commandInstanceServices;
    private validator;
    constructor();
    private validate;
    handle(command: CreateCommandInstanceCommand): Promise<CommandInstance>;
}
