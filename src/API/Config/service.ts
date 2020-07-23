import packageJson from '../../../package.json';

let serviceName = process.env.SERVICE_NAME || packageJson.name || "api-restaurant";
serviceName=serviceName.replace(/^[^\d\w]/,"")
    .replace(/[^\w\d]+/,'-');

export const service = {
  "environment": process.env.NODE_ENV || "development",
  "hydra": {
    serviceName,
    "serviceIP": process.env.SERVICE_IP || "127.0.0.1",
    "servicePort": process.env.APP_PORT || 3000,
    "serviceType": process.env.SERVICE_TYPE || serviceName,
    "serviceDescription": process.env.SERVICE_DESCRIPTION || packageJson.description || "Sorter communication",
    "redis": {
      "url": process.env.REDIS_SERVER_URL || "redis://127.0.0.1:6379/15",
      "host": process.env.REDIS_SERVER_HOST || "127.0.0.1",
      "port": process.env.REDIS_SERVER_PORT || 6379,
      "db": process.env.REDIS_SERVER_DB || 15,
    }
  }
}

export default service;