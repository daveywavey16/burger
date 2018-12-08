var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "damnburger.herokuapp.com",
  //port: 3306,
  user: "ba11fff6150568",
  password: "dadd457b",
  database: "heroku_ae28d2767e94a53"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
