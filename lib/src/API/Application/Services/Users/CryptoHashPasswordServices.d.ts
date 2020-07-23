export default class CryptoHashPasswordServices {
    passwordHash(password: string): {
        hash: string;
        salt: string;
    };
    validPassword(hashSaved: any, salt: any, password: any): boolean;
}
