import UpdateCommandInstanceCommand from '../../Commands/CommandInstances/UpdateCommandInstanceCommand';
export default class UpdateCommandInstanceHandler {
    private commandInstanceServices;
    private validator;
    constructor();
    private validate;
    handle(command: UpdateCommandInstanceCommand): Promise<import("typeorm").UpdateResult>;
}
