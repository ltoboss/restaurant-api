import ServiceExpiration from '../../Domain/Entities/ServiceExpiration';
export default class ServiceExpirationsServices {
    private repo;
    constructor();
    store(serviceExpiration: ServiceExpiration): Promise<ServiceExpiration>;
    getByService(serviceType: number): Promise<ServiceExpiration>;
    destroy(id: number): Promise<import("typeorm").DeleteResult>;
    destroyByservice(serviceType: number): Promise<import("typeorm").DeleteResult>;
    destroyAll(): Promise<import("typeorm").DeleteResult>;
}
