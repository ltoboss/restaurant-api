import BaseEntity from '../BaseEntity';
import Log from './Log';
export default class LogResponse extends BaseEntity {
    private id;
    log: Log;
    timestamp: Date;
    body: any;
    statusCode: number;
    setId(id: number): void;
    getId(): number;
}
