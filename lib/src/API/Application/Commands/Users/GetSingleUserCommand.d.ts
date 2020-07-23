import { Command } from 'simple-command-bus';
export declare class GetSingleUser {
}
export default class GetSingleUserCommand extends Command {
    id: number;
    private validator;
    constructor(id: number);
    getId(): number;
}
