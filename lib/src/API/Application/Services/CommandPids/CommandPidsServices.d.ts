import CommandPid from '../../Domain/Entities/Command/CommandPid';
export default class CommandPidsServices {
    private repo;
    constructor();
    getByPid(pid: number): Promise<CommandPid>;
    getAlive(): Promise<CommandPid>;
    getToDestroy(): Promise<CommandPid[]>;
    store(commandPid: CommandPid): Promise<CommandPid>;
    turnEverythingOff(): Promise<import("typeorm").UpdateResult>;
    kill(pid: number): Promise<import("typeorm").UpdateResult>;
    killAll(): Promise<import("typeorm").UpdateResult>;
}
