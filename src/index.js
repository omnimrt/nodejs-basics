// import fs from 'fs';

// ======Syncronous======

// const content = fs.readFileSync('test.json');
// fs.writeFileSync('output.txt', content);
// const entry = JSON.parse(content.toString());
// console.log(entry.message);

// =====Asynchronous using callbacks======

// import fs from 'fs';

// fs.readFile('test.json', (err, content) => {
//   fs.writeFile('output.txt', content, (err) => {
//     console.log('write');
//   });
//   console.log('read');
// });
// console.log('finish');

// ======Asynchronous using promises======

// import fs from 'fs/promises';

// try {
//   const content = await fs.readFile('test.json');
//   await fs.writeFile('output.txt', content);
// } catch (err) {
//   console.log(err);
// }

// import fs from 'fs/promises';
// import path from 'path';

// console.log(path.parse('dir/test.json.dsh'));
// const content = await fs.readFile('test.json');
// await fs.unlink('output.txt', content);

// src/index.js

import { startServer } from './server.js';
import { initMongoDB } from './db/initMongoDB.js';

const bootstrap = async () => {
  await initMongoDB();
  startServer();
};

bootstrap();
