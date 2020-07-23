import CommandInstance from '../../Domain/Entities/Command/CommandInstance';
export default class CommandInstanceServices {
    private commandInstanceRepository;
    constructor();
    clear(): Promise<import("typeorm").DeleteResult>;
    clean(): Promise<import("typeorm").DeleteResult>;
    find(options?: any): Promise<CommandInstance[]>;
    getAll(): Promise<CommandInstance[]>;
    findOne(conditions: any): Promise<CommandInstance>;
    getById(id: number): Promise<CommandInstance[]>;
    store(commandInstance: CommandInstance): Promise<CommandInstance>;
    update(commandInstance: CommandInstance): Promise<import("typeorm").UpdateResult>;
    destroy(id: number): Promise<import("typeorm").DeleteResult>;
}
