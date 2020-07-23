"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = require("shelljs");
const PATH_SH_FILES = `${shelljs_1.pwd()}/../_dev`;
shelljs_1.chmod('+x', `${PATH_SH_FILES}/*.sh`);
shelljs_1.exec(`${PATH_SH_FILES}/${process.argv[2].toLowerCase()}.sh`);
//# sourceMappingURL=exec.js.map