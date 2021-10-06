var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "test",
});

connection.connect();

connection.query("SELECT * FROM t_studnet", function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

connection.end();
