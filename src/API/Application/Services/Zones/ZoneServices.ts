import NotFoundEntityException from '../../Exceptions/NotFoundEntityException';
import Zone from '../../Domain/Entities/Zone';
import {getRepository, Repository} from 'typeorm';

export default class ZoneServices {
  private repo: Repository<Zone>;

  constructor() {
  }

  public async getAll() {
    this.repo = getRepository(Zone);
    return await this.repo.createQueryBuilder("zone")
                  .leftJoinAndMapMany("zone.tables","Table", "tables", "tables.zone = zone.id")
                  .getMany();
  }

  public async getById(id: number) {
    this.repo = getRepository(Zone);
    const zone = await this.repo.findOne({ where: { id }});
    if (!zone)
      throw new NotFoundEntityException(`Zone with id: ${id} not found`);
    return zone;
  }
  
  public async getByStatus(status: boolean) {
    this.repo = getRepository(Zone);
    const zone = await this.repo.find({ where: { isActive:status }});
    return zone;
  }

  public async store(zone: Zone) {
    this.repo = getRepository(Zone);
    return await this.repo.save(zone);
  }

  public async destroy(id: number) {
    this.repo = getRepository(Zone);
    const zone = await this.repo.findOne({ where: { id }});

    if (!zone) {
      throw new NotFoundEntityException(`Zone with id: ${id} not found`);
    }

    const result = await this.repo.delete(id);

    if (!result && !result.affected) {
      throw new Error(`Zone with id: ${id} cannot be deleted`);
    }
    return result.affected;
  }

}
