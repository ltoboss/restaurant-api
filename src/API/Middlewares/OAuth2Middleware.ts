import oauth2 from '../Config/oauth2';
import { userCanRequest } from '../Application/Policies/UserPolicies';
import JsonResult from '../Common/JsonResult';
const oAuth2Server = require('oauth2-server');
const Request = oAuth2Server.Request;
const Response = oAuth2Server.Response;
const oauth = new oAuth2Server(oauth2);
import * as _ from 'lodash';

export async function authenticateRequest(req, res, next) {
  const request = new Request(req);
  const response = new Response(res);

  try {
    const token = await oauth.authenticate(request, response);
    req.token = token;
    req.user = await token.user;
    return next();
  } catch (error) {
    error.statusCode = 401;
    return next(error);
  }
}

export async function authorizeRequest(req, res, next) {
  const user = await req.user;

  if (await userCanRequest(user, req)) {
    return next();
  }
  const error = new Error('Sorry but... You are not authorized to access this resource')
  _.assign(error, { statusCode : 403 });
  return next (error);
}

export default authenticateRequest;
