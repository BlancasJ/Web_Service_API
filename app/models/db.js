const mysql = require("mysql");
const dbConfig = require("../../db.config.js");

// create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  port: dbConfig.PORTS,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  insecureAuth : true
});

// open the MySQL connection
connection.connect(err => {
  if(err) throw err;
  console.log("Successfully connected to the database");
});

module.exports = connection;
