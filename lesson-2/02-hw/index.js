import * as fs from 'node:fs/promises';

// const persons = [
//   {
//     id: 1,
//     name: 'Name 1',
//   },
//   {
//     id: 2,
//     name: 'Name 2',
//   },
// ];

// fs.writeFile("db.json", JSON.stringify(persons, undefined, 2))
//   .then(console.log)
//   .catch(console.error)

fs.readFile('db.json', 'utf-8')
  .then((data) => [...JSON.parse(data), { id: 4, name: 'Name 4' }])
  .then((data) => fs.writeFile('db.json', JSON.stringify(data, undefined, 2)))
  .catch((error) => console.error(error));
