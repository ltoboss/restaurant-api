import BaseEntity from './BaseEntity';
import Zone from './Zone';
export default class Table extends BaseEntity {
    id: number;
    name: string;
    size: number;
    zone: Zone;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    setUpdatedAt(date?: Date): void;
    getId(): number;
    toJSON(): {
        id: number;
        name: string;
        size: number;
        zone: Zone;
        isActive: boolean;
    };
}
