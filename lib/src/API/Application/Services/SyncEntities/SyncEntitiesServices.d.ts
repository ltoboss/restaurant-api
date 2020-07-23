import SyncEntity from '../../Domain/Entities/SyncEntity';
export default class SyncEntitiesServices {
    private syncEntityRepository;
    constructor();
    getAll(): Promise<SyncEntity[]>;
    getAllWhere(conditions: any): Promise<SyncEntity[]>;
    findOne(conditions: any): Promise<SyncEntity>;
    getById(id: number): Promise<SyncEntity[]>;
    store(sync: SyncEntity): Promise<SyncEntity>;
    update(sync: SyncEntity): Promise<import("typeorm").UpdateResult>;
    destroy(id: number): Promise<import("typeorm").DeleteResult>;
}
