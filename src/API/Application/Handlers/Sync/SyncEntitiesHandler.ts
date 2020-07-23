import { existModel } from '../../../Common/EntitiesMigration';
import SyncEntitiesCommand from '../../Commands/Sync/SyncEntitiesCommand';
import dotenv from 'dotenv';
import walkDir from '../../../Common/WalkDir';
import SyncEntity from '../../../../API/Application/Domain/Entities/SyncEntity';
import SyncEntitiesServices from '../../../../API/Application/Services/SyncEntities/SyncEntitiesServices';
import asyncForEach from '../../../Common/AsyncForeach';

const fs = require('fs');
const crypto = require('crypto');
var path = require("path");

export default class SyncEntitiesHandler {
  private syncEntitiesServices;
  public constructor() {
    this.syncEntitiesServices = new SyncEntitiesServices();

  }

  public async handle(command: SyncEntitiesCommand) {
    if (command.getAppName() == undefined) {
      console.error('APP_NAME is required .env file ');
      return Promise.resolve(false);
    }
    dotenv.config();
    let entitiesFiles = process.env.TYPEORM_ENTITIES_SYNC;
    let entitiesFilesTmp = process.env.TYPEORM_SYNC_OUTPUT;
    let isSyncronizeForce = process.env.MIGRATION_FORCE;
    if (isSyncronizeForce && process.env.MIGRATION_FORCE.toLowerCase() !== 'false') {
      return Promise.resolve(false);
    }
    try {
      // clear snapshots cache files ...
      if (!fs.existsSync(entitiesFilesTmp)) {
        fs.mkdirSync(entitiesFilesTmp);
      }
      await walkDir(entitiesFilesTmp, async function (modelPath) {
        await fs.unlinkSync(modelPath)
        return Promise.resolve(false);
      });
      // get update all entities ... 
      let results = await this.syncEntitiesServices.getAllWhere({ where: { appName: command.getAppName() } });
      // validate exist conecction;
      /** Posible error si la tabla sync_entity o  la columna appName no existe */
      // update de hash
      await walkDir(entitiesFiles, async function (modelPath) {
        let data = fs.readFileSync(modelPath, 'utf8');
        let hash = crypto.createHash('md5').update(data.toString()).digest('hex');
        modelPath = path.basename(modelPath);
        modelPath = modelPath.replace(".ts", "");
        let filterResults = results.filter(entity => entity.name == modelPath);
        if (filterResults.length > 0) {
          results = results.map(entity => {
            if (entity.name == modelPath) {
              entity.isUpdated = entity.isUpdated == true ? true : (entity.hash != hash);
              entity.hash = hash;
            }
            return entity;
          });
        } else {
          let entity = new SyncEntity();
          entity.appName = command.getAppName();
          entity.name = modelPath;
          entity.hash = hash;
          entity.isUpdated = true;
          results.push(entity);
        }
      });
      // Update en base de datos 
      await asyncForEach(Array.from(results), async (entity) => {
        try {
          await this.syncEntitiesServices.store(entity);
        } catch (e) {
          console.error('error 72 :', e)
        }
      });
      // save in tmp_sync
      await asyncForEach(Array.from(results), async (entity) => {
        try {
          await fs.writeFileSync(entitiesFilesTmp + entity.name + '.json', JSON.stringify(entity));
        } catch (e) {
          console.error('error 81 :', e)
        }
      });

    } catch (e) {
      console.error('error 90: ', e);
      return Promise.resolve(false);
    }
    return Promise.resolve(true);
  }
}
