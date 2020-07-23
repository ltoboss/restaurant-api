import User from '../../Domain/Entities/User/User';
import UpdateUserCommand from '../../Commands/Users/UpdateUserCommand';
export default class UpdateUserHandler {
    private userServices;
    constructor();
    handle(command: UpdateUserCommand): Promise<User>;
}
