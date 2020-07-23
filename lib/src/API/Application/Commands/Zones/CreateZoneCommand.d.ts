import { Command } from 'simple-command-bus';
export default class CreateZoneCommand extends Command {
    constructor(body: Object, createPermissions?: boolean);
}
