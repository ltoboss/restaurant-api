import BaseEntity from '../BaseEntity';
import Log from './Log';
export default class LogRequest extends BaseEntity {
    private id;
    log: Log;
    timestamp: Date;
    body: any;
    url: string;
    method: string;
    setId(id: number): void;
    getId(): number;
}
