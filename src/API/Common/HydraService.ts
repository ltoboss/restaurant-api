import hydra from 'hydra';

/**
* Hydra wrappers and auxiliars to handle microservices
**/
namespace HydraService{
  /**
  *  A string describing the method to request.
  **/
  export type RequestMethod = "GET" | "POST";
  
  /**
  * Usage example:
  * ```
  * makeServiceRequest('HydraService', 'GET', '/').then( (response) => console.log(response))
  * ```
  * alternative usage:
  * ```
  * async function () {
  *   await makeServiceRequest('HydraService', 'GET', '/', {}, {'Authorization': 'Bearer XXX', 'Content-type'; 'x-www-form-urlencoded'})
  * }
  *```
  **/
  export const makeServiceRequest = function makeServiceRequest(serviceName : string,
    method : RequestMethod,
    path: string,
    body : any = {},
    headers : any = {},
  ) {
      const thisServiceName = hydra.getServiceName();
      const thisServiceIntanceID = hydra.getInstanceID();
      let message = hydra.createUMFMessage({
        headers,
        to: `${serviceName}:[${method}]${path}`,
        from: `${thisServiceName}:${thisServiceIntanceID}`,
        body,
        fallbackToQueue: true
      });
      return hydra.makeAPIRequest(message)
  }
}

export default HydraService;
export type RequestMethod = HydraService.RequestMethod;
export const makeServiceRequest = HydraService.makeServiceRequest;