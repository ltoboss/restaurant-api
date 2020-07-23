export default class UserController {
    private userServices;
    constructor();
    index(request: any, response: any, next: any): Promise<any>;
    store(request: any, response: any, next: any): Promise<any>;
    show(request: any, response: any, next: any): Promise<any>;
    update(request: any, response: any, next: any): Promise<any>;
    destroy(request: any, response: any, next: any): Promise<any>;
    getProfile(request: any, response: any, next: any): Promise<any>;
}
