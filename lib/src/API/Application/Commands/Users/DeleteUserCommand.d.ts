import { Command } from 'simple-command-bus';
export default class DeleteUserCommand extends Command {
    id: number;
    private validator;
    constructor(id: number);
    getId(): number;
}
