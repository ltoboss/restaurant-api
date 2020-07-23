import Log from '../../Domain/Entities/Log/Log';
export default class LogServices {
    private logRepository;
    constructor();
    getAll(): Promise<Log[]>;
    findOne(conditions: any): Promise<Log>;
    getBeforeDay(days: number): Promise<any>;
    getById(id: number): Promise<Log[]>;
    store(log: Log): Promise<Log>;
    update(log: Log): Promise<import("typeorm").UpdateResult>;
    destroy(id: number): Promise<import("typeorm").DeleteResult>;
    destoyBeforeDay(days: number): Promise<import("typeorm").DeleteResult>;
}
