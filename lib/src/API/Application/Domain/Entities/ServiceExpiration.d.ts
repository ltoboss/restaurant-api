import BaseEntity from './BaseEntity';
export default class ServiceExpiration extends BaseEntity {
    id: number;
    serviceType: number;
    expirationDate: Date;
    createdAt: Date;
    updatedAt: Date;
    setUpdatedAt(): void;
    getId(): number;
    getServiceType(): number;
    setServiceType(serviceType: number): void;
    getExpirationDate(): Date;
    setExpirationDate(expirationDate: any): void;
}
