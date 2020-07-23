import database from '../../../API/Config/database';
import { createConnection } from 'typeorm';
import 'reflect-metadata'; // Don't remove TypeORM need this.

import dotenv from 'dotenv';
dotenv.config();

let config = JSON.parse(JSON.stringify(database));
config.entities = database.entities;
config.synchronize = true;

createConnection(config).then(async (conn) => {
  console.log('Migration Global Succesfull');
  process.exit();
}).catch(async (err) => {
  console.error('ERROR @index.ts:createConnection');
  console.error(err);
  process.exit(1);
});





