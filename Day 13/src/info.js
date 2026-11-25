import os from 'node:os';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`platform: ${os.platform()}`);
console.log(`cpu: ${os.cpus().length}`);

console.log(`This File : ${path.basename(__filename)}`);
console.log(`Data File : ${path.join(__dirname,"..",'data' ,'tasks.json')}`);
console.log(`Arument : ${process.argv.slice(2)}`);
console.log(`Port : ${process.env.PORT ??'(not set)'}`);