import SyncEntitiesSuccessCommand from '../../Commands/Sync/SyncEntitiesSuccessCommand';
import SyncEntitiesServices from '../../../../API/Application/Services/SyncEntities/SyncEntitiesServices';
import asyncForEach from '../../../Common/AsyncForeach';

export default class SyncEntitiesClearHandler {
  
  private syncEntitiesServices;
  public constructor(){
    this.syncEntitiesServices = new SyncEntitiesServices();
    
  }
  
  public async handle(command : SyncEntitiesSuccessCommand){
    let results = await this.syncEntitiesServices.getAllWhere({where: {appName: command.getAppName()}});
    let res = true;
    await asyncForEach(Array.from(results), async (entity) => {
      try {
        if(entity.isUpdated == true) {
          entity.isUpdated = false;
          await this.syncEntitiesServices.store(entity);
        }
      } catch(e) {
        console.error('migration global error 23 :', e);
        res = false;
      } 
    });
    console.log('sync-entities-success', 'END')
    return Promise.resolve(res);
  }

}
