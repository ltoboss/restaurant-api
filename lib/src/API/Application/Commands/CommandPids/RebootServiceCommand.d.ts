import { Command } from 'simple-command-bus';
export default class RebootServiceCommand extends Command {
    private service;
    constructor(option: string);
    getService(): string;
}
