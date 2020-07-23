import NotFoundEntityException from '../../Exceptions/NotFoundEntityException';
import SyncEntity from '../../Domain/Entities/SyncEntity';
import { getRepository, Repository } from 'typeorm';

/**
 * @package SyncEntitiesService
 * @author Luis Osuna
 */
export default class SyncEntitiesServices {
  private syncEntityRepository : Repository<SyncEntity>;

  constructor() {
  }

  public async getAll() {
    this.syncEntityRepository = getRepository(SyncEntity);
    return await this.syncEntityRepository.find();
  }
  public async getAllWhere(conditions) {
    this.syncEntityRepository = getRepository(SyncEntity);
    return await this.syncEntityRepository.find(conditions);
  }

  public async findOne(conditions) {
    this.syncEntityRepository = getRepository(SyncEntity);
    return await this.syncEntityRepository.findOne(conditions);
  }

  public async getById(id: number) {
    this.syncEntityRepository = getRepository(SyncEntity);
    const sync = await this.syncEntityRepository.find( { where : { id } } );

    if (!sync ) {
      throw new NotFoundEntityException(`SynEntity with id: ${id} not found`);
    }

    return sync;
  }

  public async store(sync: SyncEntity) {
    this.syncEntityRepository = getRepository(SyncEntity);
    return await this.syncEntityRepository.save(sync);
  }

  public async update(sync: SyncEntity) {
    this.syncEntityRepository = getRepository(SyncEntity);

    const affected = await this.syncEntityRepository.createQueryBuilder()
    .update(SyncEntity)
    .set(sync)
    .where('id = :id', { id : sync.getId() })
    .execute();

    return affected;
  }

  public async destroy(id: number) {
    this.syncEntityRepository = getRepository(SyncEntity);
    const affected = await this.syncEntityRepository.delete(id);

    return affected;
  }
}
