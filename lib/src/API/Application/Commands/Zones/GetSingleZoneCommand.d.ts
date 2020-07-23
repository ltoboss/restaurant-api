import { Command } from 'simple-command-bus';
export default class GetSingleZoneCommand extends Command {
    private id;
    constructor(id: number);
    getId(): number;
}
