import express from 'express';
import { error } from '../Common/Result';
import ErrorHandler from '../Middlewares/ErrorHandler';
import { logRequest } from '../Middlewares/LoggerMiddleware';
import { authenticateRequest, authorizeRequest } from '../Middlewares/OAuth2Middleware';

import configuration from '../Config/configuration';

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerDefinition from './../Config/swagger.json';
import testingRoutes from './test.routes';
import meRoutes from './Users/me.routes';
import zoneRoutes from './Zones/zones.routes';
import tableRoutes from './Tables/tables.routes';

/*
  Instructions for parameters management on ExpressJS Router
  For query params: req.query
  For route params: req.params.id
  For body params: req.body.name
 */
const router = express.Router();

const specs = swaggerJsdoc({ swaggerDefinition, apis: ['../../API/Routes/**/*'], basePath: swaggerDefinition.basePath });
// All router middleware
router.use(logRequest);

// BEGINS PUBLIC ROUTES DEFINITIONS
import CommandBus from '../Application/Commands/CommandBus';

// router.use(configuration.static_dir, express.static(configuration.public_dir));
// router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
//   explorer: true,
// }));

// Testing endpoints
// This block should be deleted after testing completed
router.use(testingRoutes)
// Ends testing endpoints



// router.get('/api-docs.json', (req, res, next) => {
//   res.setHeader('Content-Type', 'application/json');
//   res.send(specs);
// });

//   ---- ENDS PUBLIC ROUTES DEFINITIONS ----

// Authorization required
// router.use(authenticateRequest);

router.use('/api/zones', zoneRoutes);
router.use('/api/tables', tableRoutes);

export default router;
