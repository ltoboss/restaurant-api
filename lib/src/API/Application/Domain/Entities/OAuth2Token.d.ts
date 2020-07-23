import BaseEntity from './BaseEntity';
import User from './User/User';
import Log from './Log/Log';
export default class OAuth2Token extends BaseEntity {
    private id;
    accessToken: string;
    accessTokenExpiresAt: Date;
    refreshToken: string;
    refreshTokenExpiresAt: Date;
    user: User;
    logs: Log[];
    createdAt: Date;
    updatedAt: Date;
    setUpdatedAt(date?: Date): void;
}
