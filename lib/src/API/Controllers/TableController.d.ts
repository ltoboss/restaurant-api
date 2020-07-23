export default class TableController {
    constructor();
    index(request: any, response: any, next: any): Promise<any>;
    store(request: any, response: any, next: any): Promise<any>;
    show(request: any, response: any, next: any): Promise<any>;
    destroy(request: any, response: any, next: any): Promise<any>;
    getByStatus(request: any, response: any, next: any): Promise<any>;
}
