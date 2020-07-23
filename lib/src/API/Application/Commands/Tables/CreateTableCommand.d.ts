import { Command } from 'simple-command-bus';
export default class CreateTableCommand extends Command {
    constructor(body: Object, createPermissions?: boolean);
}
