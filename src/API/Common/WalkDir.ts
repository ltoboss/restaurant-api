const fs = require('fs');
const path = require('path');

export async function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ?
            walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

export default walkDir;