import DeleteUserCommand from '../../Commands/Users/DeleteUserCommand';
export default class DeleteTableHandler {
    private tableServices;
    constructor();
    handle(command: DeleteUserCommand): Promise<number>;
}
