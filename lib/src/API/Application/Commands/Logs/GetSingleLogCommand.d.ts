import { Command } from 'simple-command-bus';
export declare class GetSingleLog {
}
export default class GetSingleLogCommand extends Command {
    id: number;
    private validator;
    constructor(id: number);
    getId(): number;
}
