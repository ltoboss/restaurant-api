import BaseEntity from './BaseEntity';
export default class SyncEntity extends BaseEntity {
    id: number;
    appName: string;
    name: string;
    hash: string;
    isUpdated: boolean;
    getId(): number;
    setId(id: number): void;
    getAppName(): string;
    setAppName(appName: string): void;
    getName(): string;
    setName(name: string): void;
    getHash(): string;
    setHash(hash: string): void;
    getIsUpdated(): boolean;
    setisUpdated(isUpdated: boolean): void;
}
