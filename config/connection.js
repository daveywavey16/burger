var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "xefi550t7t6tjn36.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "m5owu0sjmn9nlme5",
  password: "ydyrvzn88eb61gzf",
  database: "uwef5fjv3hwjbte6"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
