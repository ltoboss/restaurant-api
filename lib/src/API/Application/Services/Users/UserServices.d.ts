import User from '../../Domain/Entities/User/User';
export default class UserServices {
    private repo;
    private userRepository;
    constructor();
    getAll(): Promise<User[]>;
    getAllUsersRolesWarehouse(): Promise<User[]>;
    getById(id: number, exception?: boolean): Promise<User>;
    store(user: User): Promise<any>;
    destroy(id: number): Promise<any>;
    getByEmail(email: string): Promise<any>;
    getByToken(token: string): Promise<any>;
}
