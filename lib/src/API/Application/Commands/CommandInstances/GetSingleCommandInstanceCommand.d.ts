import { Command } from 'simple-command-bus';
export declare class GetSingleCommandInstance {
}
export default class GetSingleCommandInstanceCommand extends Command {
    id: number;
    private validator;
    constructor(id: number);
    getId(): number;
}
