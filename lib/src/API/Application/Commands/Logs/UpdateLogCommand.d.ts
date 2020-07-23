import { Command } from 'simple-command-bus';
export default class UpdateLogCommand extends Command {
    private id;
    constructor(body: Object);
    getId(): any;
}
