import { readFile } from 'fs';


readFile('Node.js/coding/sample.txt', (err, data) => {
  console.log(data);
});