import * as fs from 'node:fs/promises';
import path from 'node:path';

fs.appendFile(path.resolve('append.txt'), 'Hello from Node.js\n')
  .then(() => console.log('Done'))
  .catch((error) => console.error(error));
