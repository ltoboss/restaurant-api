/**
* @file test.routes.ts
* Simple dummy routes for testing porpouses
**/
import {makeServiceRequest, RequestMethod} from '../Common/HydraService';
import express from 'express';
import CommandBus from '../Application/Commands/CommandBus';

const router = express.Router();

router.post('/api/atlas-test', async (req, res, next) => {
  res.send({ response: 'Ok' });
});

router.post('/api/proxy-test', async (req, res, next) => {
  const headers = req.headers;
  
  // Body is already JSON encoded so specifying a content-type:application/json makes the app crash.
  delete headers['content-type'];
  
  const response = await makeServiceRequest(
    'sga-api',
    <RequestMethod>req.method,
    '/api/warehouses/find',
    req.body,
    headers
  )
  res.send(response);
})

export default router;