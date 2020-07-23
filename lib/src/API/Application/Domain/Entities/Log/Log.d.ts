import BaseEntity from '../BaseEntity';
import OAuth2Token from '../OAuth2Token';
import LogRequest from './LogRequest';
import LogResponse from './LogResponse';
import User from '../User/User';
export default class Log extends BaseEntity {
    private id;
    user: User;
    token: OAuth2Token;
    url: string;
    method: string;
    request: LogRequest;
    sendSizeKB: number;
    response: LogResponse;
    elapsedTimeInS: number;
    receiveSizeKB: number;
    isAvelon: boolean;
    setIsAvelon(): void;
    setId(id: number): void;
    getId(): number;
}
