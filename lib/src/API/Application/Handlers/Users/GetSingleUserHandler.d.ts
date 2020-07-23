import GetSingleUserCommand from '../../Commands/Users/GetSingleUserCommand';
export default class GetSingleUserHandler {
    private userServices;
    constructor();
    handle(command: GetSingleUserCommand): Promise<import("../../Domain/Entities/User/User").default>;
}
