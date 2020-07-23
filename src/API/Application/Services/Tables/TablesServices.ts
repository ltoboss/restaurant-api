import NotFoundEntityException from '../../Exceptions/NotFoundEntityException';
import Table from '../../Domain/Entities/Table';
import {getRepository, Repository} from 'typeorm';

export default class TableServices {
  private repo: Repository<Table>;

  constructor() {
  }

  public async getAll() {
    this.repo = getRepository(Table);
    return await this.repo.createQueryBuilder("table")
                 .innerJoinAndMapOne("table.zone", "Zone", "zone", "zone.id = table.zone")
                 .getMany();
  }

  public async getById(id: number) {
    this.repo = getRepository(Table);
    const table = await this.repo.findOne({ where: { id }});
    if (!table)
      throw new NotFoundEntityException(`Table with id: ${id} not found`);
    return table;
  }
  
  public async getByStatus(status: boolean) {
    this.repo = getRepository(Table);
    const table = await this.repo.find({ where: { isActive:status }});
    return table;
  }

  public async store(table: Table) {
    this.repo = getRepository(Table);
    return await this.repo.save(table);
  }

  public async destroy(id: number) {
    this.repo = getRepository(Table);
    const table = await this.repo.findOne({ where: { id }});

    if (!table) {
      throw new NotFoundEntityException(`Table with id: ${id} not found`);
    }

    const result = await this.repo.delete(id);

    if (!result && !result.affected) {
      throw new Error(`Table with id: ${id} cannot be deleted`);
    }
    return result.affected;
  }

}
