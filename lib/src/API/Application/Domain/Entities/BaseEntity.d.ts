import { BaseEntity as TypeORMBaseEntity } from 'typeorm';
export default class BaseEntity extends TypeORMBaseEntity {
    createdAt: Date;
    updatedAt: Date;
    constructor(object?: Object);
    setUpdatedAt(date?: Date): void;
    toJSON(): {};
}
