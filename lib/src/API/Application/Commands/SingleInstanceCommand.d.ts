import { Command } from 'simple-command-bus';
import CommandInstance from '../Domain/Entities/Command/CommandInstance';
export default class SingleInstanceCommand extends Command {
    private commandInstanceServices;
    constructor();
    isRunning(): Promise<boolean>;
    createInstance(): Promise<CommandInstance>;
    removeInstance(): Promise<CommandInstance>;
}
