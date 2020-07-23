import { Command } from 'simple-command-bus';
export default class DeleteCommandInstanceCommand extends Command {
    id: number;
    private validator;
    constructor(id: number);
    getId(): number;
}
