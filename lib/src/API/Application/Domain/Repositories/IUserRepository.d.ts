import User from '../Entities/User/User';
export default interface IUserRepository {
    findById(id: number): any;
    findByEmail(email: string): any;
    findByToken(token: string): any;
    findAll(): any;
    find(conditions: any): any;
    persist(user: User): any;
    destroy(id: number): any;
}
