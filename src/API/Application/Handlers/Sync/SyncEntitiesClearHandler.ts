import { existModel } from '../../../Common/EntitiesMigration';
import SyncEntity from '../../../../API/Application/Domain/Entities/SyncEntity';
import SyncEntitiesClearCommand from '../../Commands/Sync/SyncEntitiesClearCommand';
import dotenv from 'dotenv';
import walkDir from '../../../Common/WalkDir';
import SyncEntitiesServices from '../../../../API/Application/Services/SyncEntities/SyncEntitiesServices';
import asyncForEach from '../../../Common/AsyncForeach';

const fs = require('fs');
const crypto = require('crypto');
var path = require("path");

export default class SyncEntitiesClearHandler {
  
  private syncEntitiesServices;
  public constructor(){
    this.syncEntitiesServices = new SyncEntitiesServices();
    
  }
  
  public async handle(command : SyncEntitiesClearCommand){
    dotenv.config();
    let entitiesFiles = process.env.TYPEORM_ENTITIES_SYNC;
    let entitiesFilesTmp = process.env.TYPEORM_SYNC_OUTPUT;
    if(! fs.existsSync(entitiesFilesTmp)) {
      fs.mkdirSync(entitiesFilesTmp);
    }
    // eliminar archivos temporales
    await walkDir(entitiesFilesTmp, async function(modelPath) {
      await fs.unlinkSync(modelPath)  
      // eliminar de database
      return Promise.resolve(false);
    });
    // delete database
    // Update en base de datos 
    try {
      let results = await this.syncEntitiesServices.getAllWhere({where: {appName: command.getAppName()}});
      await asyncForEach(Array.from(results), async (entity) => {
        try {
          await this.syncEntitiesServices.destroy(entity.id);
        } catch(e) {
          console.error('error 42 :', e)
        } 
      }); 
    } catch(e) {
      console.error('error 45', e);
    }
    return Promise.resolve(true);
  }

}
