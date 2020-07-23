declare namespace HydraService {
    type RequestMethod = "GET" | "POST";
    const makeServiceRequest: (serviceName: string, method: RequestMethod, path: string, body?: any, headers?: any) => any;
}
export default HydraService;
export declare type RequestMethod = HydraService.RequestMethod;
export declare const makeServiceRequest: (serviceName: string, method: RequestMethod, path: string, body?: any, headers?: any) => any;
