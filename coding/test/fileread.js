import { readFile } from 'fs';


readFile('Node.js/coding/test/sample.txt','utf8', (err, data) => {
  console.log(data)
})
