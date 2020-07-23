#!/usr/bin/env ./node_modules/ts-node/dist/bin.js

import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import database from '../API/Config/database';
import CommandBus from '../API/Application/Commands/CommandBus';
import CommandInstanceServices from '../API/Application/Services/CommandInstances/CommandInstanceServices';
import '../API/Common/Logger';
import SyncEntitiesSuccessCommand from '../API/Application/Commands/Sync/SyncEntitiesSuccessCommand';

async function main() {
  dotenv.config();
  console.log('Sync-entities-success : ' + process.env.APP_NAME);
  await CommandBus.handle(new SyncEntitiesSuccessCommand(process.env.APP_NAME));
 
}



createConnection(database).then(async (conn) => {
  const commandInstanceServices = new CommandInstanceServices();
  await commandInstanceServices.clear();

  await main();
  process.exit(0);
}).catch((err) => {
  console.error('ERROR @index.ts:createConnection');
  console.error(err);
  process.exit(1);
});

// console.log(process);
