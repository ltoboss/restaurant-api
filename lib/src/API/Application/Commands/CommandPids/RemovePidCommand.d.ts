import { Command } from 'simple-command-bus';
export default class RemovePidCommand extends Command {
    private service;
    constructor(option: string);
    getService(): string;
}
