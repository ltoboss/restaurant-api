import SyncEntity from '../../API/Application/Domain/Entities/SyncEntity';
import { getConnection } from 'typeorm';

const fs = require('fs');
const crypto = require('crypto');
var path = require("path");
import dotenv from 'dotenv';
dotenv.config();
let entitiesFiles = process.env.TYPEORM_ENTITIES_SYNC;
let entitiesFilesTmp = process.env.TYPEORM_SYNC_OUTPUT;

export  async function  existModel(modelPath: string) {
    let data = fs.readFileSync(modelPath,'utf8');
    modelPath = path.basename(modelPath);
    modelPath = modelPath.replace(".ts", "");
    let hash = crypto.createHash('md5').update(data.toString()).digest('hex');
    let entity = new SyncEntity();
    entity.hash = hash;
    entity.name = modelPath;
    let results = [];
    try {
        results = await getConnection().getRepository(SyncEntity).createQueryBuilder('s').where("s.name = :name ", {name : modelPath}).execute();
    } catch($e) {
        entity.isUpdated = SyncEntity.name == modelPath;       
        return Promise.resolve(entity);
    }
    if(results.length == 0) { // no existe
        entity.isUpdated = true;
    } else {
        let result = results[0]; 
        entity.id= result.s_id;
        if(result.s_hash != hash) {
            entity.isUpdated = true;
        } else {
            // analisar en caso que no se syncronizo, por posibles errores propios del typeorm
            entity.isUpdated = false;
        }
    }
    await getConnection().manager.save(entity);   
    return Promise.resolve(entity);

}

export default existModel;