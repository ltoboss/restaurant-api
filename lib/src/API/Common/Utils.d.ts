export declare function chunkArray(myArray: any, chunk_size: any): any[];
export declare function sleep(ms: any): Promise<unknown>;
export declare function checkDuplicateInObject(propertyName: any, inputArray: any): boolean;
export declare function generateNewPaginatorResponse(selectPage: number, limit: number, totalResults: number): {
    selectPage: number;
    firstPage: number;
    lastPage: number;
    limit: number;
    totalResults: number;
};
