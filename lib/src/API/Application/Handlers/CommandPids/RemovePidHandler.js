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
const ServiceExpiration_1 = __importDefault(require("../../Domain/Entities/ServiceExpiration"));
const CommandPidsServices_1 = __importDefault(require("../../Services/CommandPids/CommandPidsServices"));
const ServiceExpirationServices_1 = __importDefault(require("../../Services/CommandPids/ServiceExpirationServices"));
const CommandInstanceServices_1 = __importDefault(require("../../Services/CommandInstances/CommandInstanceServices"));
const moment_1 = __importDefault(require("moment"));
const child_process_1 = require("child_process");
const ServiceType_1 = require("../../Domain/Enums/ServiceType");
class RemoveCommandPidHandler {
    constructor() {
        this.commandPidsServices = new CommandPidsServices_1.default();
        this.commandInstanceServices = new CommandInstanceServices_1.default();
        this.serviceExpirationServices = new ServiceExpirationServices_1.default();
    }
    handle(command) {
        return __awaiter(this, void 0, void 0, function* () {
            let instances, allPids;
            const timeExpirated = 1;
            let serviceExpiration = new ServiceExpiration_1.default();
            switch (command.getService()) {
                case 'all':
                    serviceExpiration.setServiceType(ServiceType_1.ServiceType.SERVER);
                    serviceExpiration.setExpirationDate(getExpirationDate(timeExpirated));
                    yield this.serviceExpirationServices.store(serviceExpiration);
                    serviceExpiration.setServiceType(ServiceType_1.ServiceType.SYNC);
                    serviceExpiration.setExpirationDate(getExpirationDate(timeExpirated));
                    yield this.serviceExpirationServices.store(serviceExpiration);
                    const pids = yield this.commandPidsServices.getToDestroy();
                    instances = yield this.commandInstanceServices.getAll();
                    yield this.commandPidsServices.killAll();
                    yield this.commandInstanceServices.clean();
                    allPids = instances.map(x => x.getId().toString()).concat(pids.map(x => x.getPid().toString()));
                    yield killAll(allPids);
                    break;
                case 'server':
                    const pid = yield this.commandPidsServices.getAlive();
                    if (pid) {
                        serviceExpiration.setServiceType(ServiceType_1.ServiceType.SERVER);
                        serviceExpiration.setExpirationDate(getExpirationDate(timeExpirated));
                        yield this.serviceExpirationServices.store(serviceExpiration);
                        yield this.commandPidsServices.kill(pid.getPid());
                        process.kill(pid.getPid());
                    }
                    break;
                case 'sync':
                    serviceExpiration.setServiceType(ServiceType_1.ServiceType.SYNC);
                    serviceExpiration.setExpirationDate(getExpirationDate(timeExpirated));
                    yield this.serviceExpirationServices.store(serviceExpiration);
                    instances = yield this.commandInstanceServices.getAll();
                    yield this.commandInstanceServices.clean();
                    allPids = instances.map(x => x.getId().toString());
                    yield killAll(allPids);
            }
        });
    }
}
exports.default = RemoveCommandPidHandler;
const killAll = (pids) => {
    const kill = child_process_1.spawn('kill', pids);
    kill.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
    kill.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });
    kill.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
};
const getExpirationDate = (timeExpirated) => {
    return moment_1.default(new Date).add(timeExpirated, 'h').format();
};
//# sourceMappingURL=RemovePidHandler.js.map