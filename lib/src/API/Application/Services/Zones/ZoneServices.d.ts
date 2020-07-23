import Zone from '../../Domain/Entities/Zone';
export default class ZoneServices {
    private repo;
    constructor();
    getAll(): Promise<Zone[]>;
    getById(id: number): Promise<Zone>;
    getByStatus(status: boolean): Promise<Zone[]>;
    store(zone: Zone): Promise<Zone>;
    destroy(id: number): Promise<number>;
}
