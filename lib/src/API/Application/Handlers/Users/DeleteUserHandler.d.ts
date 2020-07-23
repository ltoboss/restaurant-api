import DeleteUserCommand from '../../Commands/Users/DeleteUserCommand';
export default class DeleteUserHandler {
    private userServices;
    constructor();
    handle(command: DeleteUserCommand): Promise<any>;
}
