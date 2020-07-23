import BaseEntity from '../BaseEntity';
export default class CommandInstance extends BaseEntity {
    private id;
    private command;
    pid: number;
    private expirationDate;
    refreshExpirationDate(msToIncrease?: number): Promise<void>;
    setId(id: number): void;
    getId(): number;
}
