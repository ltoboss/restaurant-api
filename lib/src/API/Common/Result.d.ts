export declare function success(data: any, msg: string, status: number): {
    data: any;
    message: string;
    code: number;
};
export declare function successDeleted(msg: string, status: number): {
    message: string;
    code: number;
};
export declare function error(data: any, msg: string, status: number): {
    errors: any;
    message: string;
    code: number;
};
