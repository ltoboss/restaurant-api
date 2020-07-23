import User from '../../Domain/Entities/User/User';
export default class ResetPasswordServices {
    private userRepository;
    private cryptoServices;
    constructor();
    generateToken(user: User): Promise<string>;
    changePassword(user: User, newPassword: string): Promise<User>;
}
