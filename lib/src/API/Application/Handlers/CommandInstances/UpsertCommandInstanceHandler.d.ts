import UpsertCommandInstanceCommand from '../../Commands/CommandInstances/UpsertCommandInstanceCommand';
import CommandInstance from '../../Domain/Entities/Command/CommandInstance';
export default class UpsertCommandInstanceHandler {
    private commandInstanceServices;
    private validator;
    constructor();
    private validate;
    handle(command: UpsertCommandInstanceCommand): Promise<CommandInstance>;
}
