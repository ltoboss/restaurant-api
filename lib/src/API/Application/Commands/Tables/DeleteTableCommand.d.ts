import { Command } from 'simple-command-bus';
export default class DeleteTableCommand extends Command {
    id: number;
    private validator;
    constructor(id: number);
    getId(): number;
}
