import BaseEntity from '../BaseEntity';
import CommandInstance from './CommandInstance';
export default class CommandLog extends BaseEntity {
    private id;
    private pid;
    private command;
    private commandInput;
    constructor(command: string, log: object, pid: number);
    setPid(pid?: number): void;
    getCommandInstance(): Promise<Array<CommandInstance>>;
}
