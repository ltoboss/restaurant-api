import { Command } from 'simple-command-bus';
export default class UpsertLogCommand extends Command {
    private id;
    constructor(body: Object);
    getId(): any;
}
