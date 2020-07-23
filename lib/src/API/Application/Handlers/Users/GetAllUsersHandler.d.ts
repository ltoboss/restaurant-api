import GetAllUsersCommand from '../../Commands/Users/GetAllUsersCommand';
export default class GetAllUsersHandler {
    private userServices;
    constructor();
    handle(command: GetAllUsersCommand): Promise<{
        users: import("../../Domain/Entities/User/User").default[];
        usersRolesWarehouse: import("../../Domain/Entities/User/User").default[];
    }>;
}
