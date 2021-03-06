import OAuth2Token from '../OAuth2Token';
import BaseEntity from '../BaseEntity';
export default class User extends BaseEntity {
    id: number;
    email: string;
    name: string;
    address: string;
    phone: number;
    password: string;
    salt: string;
    employedId: number;
    resetPasswordToken: string;
    tokens: Promise<OAuth2Token[]>;
    hasWarehouse: boolean;
    createdAt: Date;
    updatedAt: Date;
    setUpdatedAt(date?: Date): void;
    getId(): number;
    getName(): string;
    setName(name: string): void;
    getEmail(): string;
    setEmail(email: string): void;
    getAddress(): string;
    setAddress(address: string): void;
    getPhone(): number;
    setPhone(phone: number): void;
    getPassword(): string;
    setPassword(password: string): void;
    getSalt(): string;
    setSalt(salt: string): void;
    getResetPasswordToken(): string;
    setResetPasswordToken(token: string): void;
    hasResetPasswordToken(): boolean;
    getEmployedId(): number;
    setEmployedId(employedId: number): void;
    getHasWarehouse(): boolean;
    setHasWarehouse(hasWarehouse: boolean): void;
}
