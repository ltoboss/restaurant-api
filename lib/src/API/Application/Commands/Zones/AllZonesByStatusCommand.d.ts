import { Command } from 'simple-command-bus';
export declare class GetSingleUser {
}
export default class AllZonesByStatusCommand extends Command {
    status: boolean;
    private validator;
    constructor(status: boolean);
    getStatus(): boolean;
}
