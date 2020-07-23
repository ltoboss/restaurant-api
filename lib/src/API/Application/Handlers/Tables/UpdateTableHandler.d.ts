import Table from '../../Domain/Entities/Table';
import UpdateUserCommand from '../../Commands/Users/UpdateUserCommand';
export default class UpdateTableHandler {
    private tableServices;
    constructor();
    handle(command: UpdateUserCommand): Promise<Table>;
}
