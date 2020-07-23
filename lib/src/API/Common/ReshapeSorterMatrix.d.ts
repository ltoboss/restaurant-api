export interface PositionSorterMatrix {
    row: number;
    col: number;
}
export declare function reshapeSorterMatrix(rows: any, cols: any): Promise<any[]>;
export declare function returnPositionSorterMatrix(rows: any, cols: any, position: PositionSorterMatrix): Promise<any>;
