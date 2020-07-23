import 'reflect-metadata';
export declare function dropDataEntity(entity: any): Promise<void>;
export declare function dropDataByTableName(tableName: any): Promise<void>;
export declare function recconectDatabase(): Promise<import("typeorm").Connection>;
