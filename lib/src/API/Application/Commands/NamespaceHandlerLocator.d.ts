import { HandlerLocator } from 'simple-command-bus';
export default class NamespaceHandlerLocator extends HandlerLocator {
    handlers: any;
    basepath: string;
    constructor(handlersPath?: string);
    getHandlerForCommand(commandName: any): any;
}
