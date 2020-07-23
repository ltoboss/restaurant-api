#!/usr/bin/env ./node_modules/ts-node/dist/bin.js

import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import database from '../API/Config/database';
import CommandBus from '../API/Application/Commands/CommandBus';
import CommandInstanceServices from '../API/Application/Services/CommandInstances/CommandInstanceServices';
import '../API/Common/Logger';
import SyncEntitiesClearCommand from '../API/Application/Commands/Sync/SyncEntitiesClearCommand';

async function main() {
  console.log('Clear Sync tmp entities');
  // clear
  dotenv.config();
  let entitiesFiles = process.env.TYPEORM_ENTITIES_SYNC;
  await CommandBus.handle(new SyncEntitiesClearCommand(process.env.APP_NAME));
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
