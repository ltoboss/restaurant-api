export default class OAuth2TokenController {
    private accessPermitionsDictionary;
    private userServices;
    requestAccessToken(request: any, response: any, next: any): Promise<any>;
    revokeToken(request: any, response: any, next: any): Promise<any>;
}
