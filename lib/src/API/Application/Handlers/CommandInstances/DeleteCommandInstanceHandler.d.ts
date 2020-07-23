import DeleteCommandInstanceCommand from '../../Commands/CommandInstances/DeleteCommandInstanceCommand';
export default class DeleteCommandInstanceHandler {
    private commandInstanceServices;
    constructor();
    handle(command: DeleteCommandInstanceCommand): Promise<import("typeorm").DeleteResult>;
}
