import Log from '../Application/Domain/Entities/Log/Log';
export declare function startLogging(req: any): Promise<Log>;
export declare function endLogging(log: any, res: any, data: string): Promise<any>;
export declare function createLog(req: any, res: any, data: any, startHrTime: any): Promise<Log>;
export declare function logRequest(req: any, res: any, next: any): Promise<void>;
