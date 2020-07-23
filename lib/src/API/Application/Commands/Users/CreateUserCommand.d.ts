import { Command } from 'simple-command-bus';
export default class CreateUserCommand extends Command {
    private password;
    private roles;
    private roleId;
    private permits;
    private createPermissions;
    constructor(body: Object, createPermissions?: boolean);
    getPassword(): any;
    getRoleId(): any;
    getRoles(): any;
    getPermits(): any;
}
