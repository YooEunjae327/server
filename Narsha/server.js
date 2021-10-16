var http = require("http");
var fs = require("fs");
var querystring = require("querystring");
const { type } = require("os");
const port = 3000;

var server = http
  .createServer(function (req, res) {
    if (req.method == "GET") {
      fs.readFile("./Narsha/index.html", "utf8", function (error, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    } else if (req.method == "POST") {
      req.on("data", function (chunk) {
        console.log(chunk.toString());
        var data = querystring.parse(chunk.toString());
        res.writeHead(200, { "Content-Type": "text/html" });

        let num1 = Number(data.fi);
        let num2 = Number(data.se);
        let result = 0;

        res.end("value : " + result);
      });
    }
  })
  .listen(port, function () {
    console.log("Server is running...");
  });
;