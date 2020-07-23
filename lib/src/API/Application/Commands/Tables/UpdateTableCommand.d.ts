import { Command } from 'simple-command-bus';
export default class UpdateTableCommand extends Command {
    private id;
    constructor(body: any);
    getId(): any;
}
