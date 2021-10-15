import http from 'http';
import { readFile } from 'fs';
import { parse } from 'url';

const app = http.createServer(function(request,response){
    let _url = request.url;
    let queryData = parse(_url, true).query 
    let title = queryData.id
    let pathname = parse(_url, true).pathname

    if(_url == '/'){
      title = 'Welcome'
    }
    if(_url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;   
    }

    if(pathname === '/')
    {
    readFile(`Nodejs/coding/data/${queryData.id}`, 'utf8', function(err, description)
    {
      let template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript ">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        </p>${description}</p>
      </body>
      </html>
      `
      response.writeHead(200);
      response.end(template);
    })
  }
  else
  {
    response.writeHead(404)
    response.end('Error')
  }
    
 
});
app.listen(3000);