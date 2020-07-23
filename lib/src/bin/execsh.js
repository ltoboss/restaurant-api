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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecKillAll = exports.ExecKill = void 0;
const child_process_1 = require("child_process");
const shelljs_1 = require("shelljs");
const PATH_SH_FILES = `${shelljs_1.pwd()}/../_dev`;
function ExecKill(pid) {
    return __awaiter(this, void 0, void 0, function* () {
        shelljs_1.chmod('+x', `${PATH_SH_FILES}/kill.sh`);
        shelljs_1.exec(`${PATH_SH_FILES}/kill.sh ${pid}`);
    });
}
exports.ExecKill = ExecKill;
function ExecKillAll(pids) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
exports.ExecKillAll = ExecKillAll;
//# sourceMappingURL=execsh.js.map