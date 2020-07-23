import { Command } from 'simple-command-bus';
export default class GetSingleTableCommand extends Command {
    private id;
    constructor(id: number);
    getId(): number;
}
