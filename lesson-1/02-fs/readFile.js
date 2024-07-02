// import * as fs from "node:fs";
// import path from "node:path";

// console.log("Before");

// fs.readFile(path.resolve("read.txt"), { encoding: "utf8"}, (err, data) => {
//   if (err) {
//     throw err;
//   }

//   console.log(data);
// });

// console.log("After");

import * as fs from 'node:fs/promises';
import path from 'node:path';

// fs.readFile(path.resolve("read.txt"), { encoding: "utf8"})
//   .then((data) => console.log(data))
//   .catch(error => console.error(error));

async function readFile() {
  const data = await fs.readFile(path.resolve('read.txt'), {
    encoding: 'utf8',
  });
  const transformedData = data.toUpperCase();

  return transformedData;
}

readFile()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
