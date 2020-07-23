import dotenv from 'dotenv';
const fs = require('fs');

export function isSyncEntities(classEntities) {
    try {
        dotenv.config();
        let isSyncronizeForce = process.env.MIGRATION_FORCE || true;
        if(isSyncronizeForce) {
            return true;
        }
        let entitiesFilesTmp = process.env.TYPEORM_SYNC_OUTPUT;
        // error posible por no existencia de archivo
        let data = fs.readFileSync(entitiesFilesTmp + classEntities.name +  ".json",'utf8');
        let obj = JSON.parse(data);
        //if(obj.error == true || obj.isUpdated == true) console.log("Debug Sync entities : " + classEntities.name)
        return (obj.isUpdated == true || obj.isUpdated == undefined) ;
    } catch(e) {
        if(classEntities.name == 'SyncEntity') {
            return true;
        }
        return false;
    }
}
export default isSyncEntities;
