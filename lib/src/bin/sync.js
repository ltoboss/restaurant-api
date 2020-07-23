#!/usr/bin/env ./node_modules/ts-node/dist/bin.js
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
const dotenv_1 = __importDefault(require("dotenv"));
const moment_1 = __importDefault(require("moment"));
const typeorm_1 = require("typeorm");
const database_1 = __importDefault(require("../API/Config/database"));
const CommandBus_1 = __importDefault(require("../API/Application/Commands/CommandBus"));
const ServiceType_1 = require("../API/Application/Domain/Enums/ServiceType");
const StoppedServiceException_1 = __importDefault(require("../API/Application/Exceptions/StoppedServiceException"));
const ServiceExpirationServices_1 = __importDefault(require("../API/Application/Services/CommandPids/ServiceExpirationServices"));
const CommandInstanceServices_1 = __importDefault(require("../API/Application/Services/CommandInstances/CommandInstanceServices"));
const deasync_promise_1 = __importDefault(require("deasync-promise"));
require("../API/Common/Logger");
const SyncEntitiesCommand_1 = __importDefault(require("../API/Application/Commands/Sync/SyncEntitiesCommand"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        global["aawait"] = deasync_promise_1.default;
        console.log('Synchronize');
        if (process.argv.length > 2) {
            if (!process.argv[3] || process.argv[3].toLowerCase() !== '--force') {
                const serviceExpirationsServices = new ServiceExpirationServices_1.default();
                const service = yield serviceExpirationsServices.getByService(ServiceType_1.ServiceType.SYNC);
                if (service) {
                    if (moment_1.default(service.getExpirationDate()).format() > moment_1.default().format()) {
                        throw new StoppedServiceException_1.default('The synchronization service is temporarily stopped');
                    }
                    else if (service) {
                        yield serviceExpirationsServices.destroy(service.getId());
                    }
                }
            }
            switch (process.argv[2].toLowerCase()) {
                case 'sync-entities':
                    dotenv_1.default.config();
                    yield CommandBus_1.default.handle(new SyncEntitiesCommand_1.default(process.env.APP_NAME));
                    break;
            }
        }
    });
}
if (process.argv.length === 2) {
    console.log('Usage: ' + process.argv[1] + ' [ colours | stores | sizes | models | all ]');
    process.exit(0);
}
typeorm_1.createConnection(database_1.default).then((conn) => __awaiter(void 0, void 0, void 0, function* () {
    const commandInstanceServices = new CommandInstanceServices_1.default();
    yield commandInstanceServices.clear();
    yield main();
    process.exit(0);
})).catch((err) => {
    console.error('ERROR @index.ts:createConnection');
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=sync.js.map