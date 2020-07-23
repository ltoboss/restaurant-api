/**
* @file index
* @description Starts a microservice defined on config/service.json powered by hydra
**/
import { loadEnv, HydraSanitizer } from '@krack/utils';
loadEnv();
import './API/Config/configuration';
import {
  sentryRequestHandler,
  sentryErrorHandler,
} from './sentryTracker';

import packageJson from '../package.json';
import service from './API/Config/service';

import hydraExpress from 'hydra-express';
import 'reflect-metadata'; // Don't remove TypeORM need this.
import cors from 'cors';
import { Express } from 'express';
import bodyParser from 'body-parser';
import {
  createConnection,
  Connection,
} from 'typeorm';
import './API/Common/Logger';
import routes from './API/Routes/routes';
import database from './API/Config/database';
import RegisterPids from './API/Common/RegisterPids';
import * as corsConfiguration from './API/Config/cors';
import RequestFirewall from './API/Middlewares/RequestFirewall';
import ErrorHandler from './API/Middlewares/ErrorHandler';
import CommandBus from './API/Application/Commands/CommandBus';
import expressGetEndpoints from 'express-get-endpoints';
import deasyncPromise from 'deasync-promise';

/* Instantiate ExpressJs Application */
export const app = hydraExpress.getExpressApp();
global["aawait"] = deasyncPromise;

// hydraExpress.log = () => { };

export function openPort(): Promise<Express> {
  console.log('Starting API');
  return new Promise((resolve, reject) => {
    process.on('uncaughtException', (e) => {
      reject(e);
      console.error(e);
    });

    /* Turn on Server on specific PORT */
    hydraExpress.init(service, packageJson.version,
                      () => {
                        /* Routes declarations */
                        app.use(routes);
                        const routeList = expressGetEndpoints(app)
                          .reduce((list, item) => {
                            return list.concat(item.methods.map((method) => {
                              return `[${method.toLowerCase()}]${item.path}`;
                            }));
                          },      []);
                        hydraExpress.getHydra().registerRoutes(routeList);

                        app.use(sentryErrorHandler({
                          shouldHandleError(error) {
                            // Capture all 404 and 500 errors
                            if (error.status >= 500) {
                              return true;
                            }
                            return false;
                          },
                        }));
                        app.use(ErrorHandler);
                      },
                      () => {
                        // Register midlewares
                        /* Add support for Application/Json & x-www-format-urlencoded */
                        app.use(sentryRequestHandler());
                        app.use(bodyParser.json());
                        app.use(bodyParser.urlencoded({ extended: true }));
                        app.use(cors(corsConfiguration));
                        app.use(RequestFirewall);
                      },
    ).then(async (serviceConfig) => {
      console.log(`Service ${serviceConfig.serviceName} started.`);
      console.log(`Review the documentation at http://${serviceConfig.serviceIP}:${serviceConfig.servicePort}/api-docs`);
      await RegisterPids(process.pid);
      setInterval(async () => {
        await RegisterPids(process.pid);
      },          60000);
      resolve(app);
    })
      .catch((err) => { console.error(err); });
  });
}

const sanitizeService = () => {
  const hydraSanitizer = new HydraSanitizer(service.hydra.redis);
  return  hydraSanitizer.cleanSingleService(service.hydra.serviceName);
};

export const sorter = new Promise((res, rej) => {
  try {
    console.info('Starting DB Connection');
    createConnection(database)
    .catch((e) => { console.error(e); })
    .then(() => openPort())
    .catch(e => console.error('Non Fatal', e))
    .finally(sanitizeService)
    .finally(() => res(app));
  }catch (e) {
    console.error(e);
  }
});

process.on('uncaughtException', (e) => {
  console.log('An error has occured. error is: %s and stack trace is: %s', e, e.stack);
  console.log('Process will restart now.');
  process.exit(1);
});

export default app;
