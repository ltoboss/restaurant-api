import User from '../../Domain/Entities/User/User';
import CreateUserCommand from '../../Commands/Users/CreateUserCommand';
export default class CreateUserHandler {
    private userServices;
    private cryptoHashPasswordServices;
    constructor();
    handle(command: CreateUserCommand): Promise<User>;
}
