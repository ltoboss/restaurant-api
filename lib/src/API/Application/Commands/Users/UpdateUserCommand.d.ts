import { Command } from 'simple-command-bus';
export default class UpdateUserCommand extends Command {
    private id;
    private password;
    private roleId;
    private roles;
    constructor(body: Object);
    getId(): any;
    getPassword(): any;
    getRoleId(): any;
    getRoles(): any;
}
