import Table from '../../Domain/Entities/Table';
export default class TableServices {
    private repo;
    constructor();
    getAll(): Promise<Table[]>;
    getById(id: number): Promise<Table>;
    getByStatus(status: boolean): Promise<Table[]>;
    store(table: Table): Promise<Table>;
    destroy(id: number): Promise<number>;
}
