"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SyncEntitiesServices_1 = __importDefault(require("../../../../API/Application/Services/SyncEntities/SyncEntitiesServices"));
const AsyncForeach_1 = __importDefault(require("../../../Common/AsyncForeach"));
class SyncEntitiesClearHandler {
    constructor() {
        this.syncEntitiesServices = new SyncEntitiesServices_1.default();
    }
    handle(command) {
        return __awaiter(this, void 0, void 0, function* () {
            let results = yield this.syncEntitiesServices.getAllWhere({ where: { appName: command.getAppName() } });
            let res = true;
            yield AsyncForeach_1.default(Array.from(results), (entity) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (entity.isUpdated == true) {
                        entity.isUpdated = false;
                        yield this.syncEntitiesServices.store(entity);
                    }
                }
                catch (e) {
                    console.error('migration global error 23 :', e);
                    res = false;
                }
            }));
            console.log('sync-entities-success', 'END');
            return Promise.resolve(res);
        });
    }
}
exports.default = SyncEntitiesClearHandler;
//# sourceMappingURL=SyncEntitiesSuccessHandler.js.map