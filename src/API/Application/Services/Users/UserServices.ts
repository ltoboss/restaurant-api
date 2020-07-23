import NotFoundEntityException from '../../Exceptions/NotFoundEntityException';
import User from '../../Domain/Entities/User/User';
import IUserRepository from '../../Domain/Repositories/IUserRepository';
import UserRepository from '../../../../Persistence/Repositories/UserRepository';
import {getRepository, In, Repository} from 'typeorm';

/**
 * @package UserServices
 * @author Luis Felipe Osuna
 */
export default class UserServices {
  private repo: Repository<User>;
  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async getAll() {
    this.repo = getRepository(User);
    return await this.repo.find({ relations: ['roles'], order: { id: "ASC" } });
  }  

  public async getAllUsersRolesWarehouse(){
    this.repo = getRepository(User);
    return await this.repo.find({ relations: ['roles'], order: { id: "ASC" } });
  }

  public async getById(id: number, exception = false) {
    this.repo = getRepository(User);
    const user = await this.repo.findOne({ where: { id }, relations: ['roles'] });

    if (!user && !exception) {
      throw new NotFoundEntityException(`User with id: ${id} not found`);
    }

    return user;
  }

  public async store(user: User) {
    return await this.userRepository.persist(user);
  }

  public async destroy(id: number) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundEntityException(`User with id: ${id} not found`);
    }

    const result = await this.userRepository.destroy(id);

    if (!result && !result.affected) {
      throw new Error(`User with id: ${id} cannot be deleted`);
    }

    return result.affected;
  }

  public async getByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email);
    return user;
  }

  public async getByToken(token: string) {
    const user = await this.userRepository.findByToken(token);

    if (!user) {
      throw new NotFoundEntityException(`User with token: ${token} not found`);
    }

    return user;
  }
}
