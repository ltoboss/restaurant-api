import { Middleware } from 'simple-command-bus';
export default class CommandLogger extends Middleware {
    execute(command: any, next: any): Promise<any>;
}
