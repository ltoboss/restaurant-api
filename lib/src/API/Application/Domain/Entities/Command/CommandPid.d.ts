import BaseEntity from '../BaseEntity';
export default class CommandPid extends BaseEntity {
    id: number;
    pid: number;
    alive: number;
    softDeleted: number;
    createdAt: Date;
    updatedAt: Date;
    setUpdatedAt(date?: Date): void;
    getId(): number;
    getPid(): number;
    setPid(pid: number): void;
    getAlive(): number;
    setAlive(alive: number): void;
    getSoftDeleted(): number;
    setSoftDeleted(softDeleted: number): void;
}
