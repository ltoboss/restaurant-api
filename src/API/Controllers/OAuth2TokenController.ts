import oauth2 from '../Config/oauth2';
import oauth2Server from 'oauth2-server';
import { success, error } from '../Common/Result';
import JsonResult from '../Common/JsonResult';
import UserServices from "../Application/Services/Users/UserServices";

export default class OAuth2TokenController {
  /**
   * Permisions to access to the frontend links
   * for now all users have all permissions
   * @todo create schema and assign permissions to users based in roles in the system
   */
  private accessPermitionsDictionary = {
    'user-time': null,
    'products': null,
    'labels': null,
    'warehouses-management': null,
    'workwaves-scheduled': null,
    'workwaves-templates': null,
    'workwaves-history': null,
    'user-management': null,
    'operator-parametrization': null,
    'roles': null,
    'warehouses': null,
    'warehouses-group': null,
    'group-to-warehouse': null,
    'jails': null,
    'pallets': null,
    'logout': null,
    'positioning': null,
    'picking-task': null,
    'settings': null,
    'positioning-manual': null,
    'picking-tasks-manual': null,
    'tariff-al': null,
    'tariff-sga': null,
    'reception': null,
    'calendar': null,
    'building': null,
    'empty-carrier': null,
    'print-tags': null,
    'print-packing': null,
    'packing-seal': null,
    'packing-seal-manual': null,
    'print-ref-tag-manual': null,
    'print-price-tag-manual': null,
    'print-product': null,
    'print-product-manual': null,
    'print-products-received': null,
    'products-info': null,
    'pickings-execution': null,
    'incidences': null,
    'sorter-input': null,
    'sorter-output': null,
    'sorter-template-selection': null,
    'state-expedition-avelon': null,
    'avelonProviders': null,
    'send-empty-packing': null
  };

  private userServices: UserServices;

  public async requestAccessToken(request, response, next) {


    this.userServices = new UserServices();

    const oauth = new oauth2Server(oauth2);
    const Request = oauth2Server.Request;
    const Response = oauth2Server.Response;

    if (request.body && !request.body.scope) {
      delete request.body.scope;
    }


    try {
      const token = await oauth.token(new Request(request), new Response(response));
      let user = await token.user;
      /**activate the menu in al*/
      this.accessPermitionsDictionary['user-time'] = false;  
      this.accessPermitionsDictionary['roles'] = true;    
      this.accessPermitionsDictionary['logout'] = true;
      this.accessPermitionsDictionary['settings'] = true;
     
      let userComplete = await this.userServices.getById(user.id);
      
      
      
      const tokenData = {
        access_token: token.accessToken,
        access_token_expires_at: token.accessTokenExpiresAt,
        refresh_token: token.refreshToken,
        refresh_token_expires_at: token.refreshTokenExpiresAt,
        user: userComplete,
        accessPermitionsDictionary: this.accessPermitionsDictionary
      };



      return response.status(200).json(
        success(
          tokenData,
          'Access Token information retrieved',
          200,
        ),
      );
    } catch (error) {
      return response.status(401).json(
        JsonResult(
          {},
          error.message,
          error.code,
        ),
      );
    }
  }

  public async revokeToken(request, response, next) {
    const user = await request.user;
    // const command = new DestroyPermissionsUserCommand(user.id);
    // await commandBus.handle(command);

    await request.token.remove();
    return response.status(200).json(success({}, 'Access token revoked', 200));
  }
}
