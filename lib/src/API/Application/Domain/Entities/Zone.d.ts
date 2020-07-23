import BaseEntity from './BaseEntity';
export default class Zone extends BaseEntity {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    setUpdatedAt(date?: Date): void;
    getId(): number;
}
