const mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cr7isali!!!!",
    database: "burgers_db"
  });
}
connection.connect();
module.exports = connection;
