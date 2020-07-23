import User from '../../API/Application/Domain/Entities/User/User';
import IUserRepository from '../../API/Application/Domain/Repositories/IUserRepository';
export default class UserRepository implements IUserRepository {
    private repo;
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
    findByToken(token: any): Promise<User>;
    findByEmail(email: string): Promise<User>;
    find(conditions: any): Promise<User[]>;
    persist(user: User): Promise<User>;
    destroy(id: number): Promise<import("typeorm").DeleteResult>;
}
