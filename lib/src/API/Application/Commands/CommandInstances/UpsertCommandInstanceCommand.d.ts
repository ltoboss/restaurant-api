import { Command } from 'simple-command-bus';
export default class UpsertCommandInstanceCommand extends Command {
    private id;
    constructor(body: Object);
    getId(): any;
}
