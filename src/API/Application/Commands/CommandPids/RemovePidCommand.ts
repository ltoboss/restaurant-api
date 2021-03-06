import { Command } from 'simple-command-bus';

export default class RemovePidCommand extends Command {
  private service: string; 

  constructor(option: string) {
    super();

    this.service = option || 'server';
  }

  getService() : string {
    return this.service;
  }
}
