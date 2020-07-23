import { Command } from 'simple-command-bus';
export default class UpdateCommandInstanceCommand extends Command {
    private id;
    constructor(body: Object);
    getId(): any;
}
