const mysql = require('mysql')

// create database connection
exports.dbConnect = (user, password, database, host) => {
  console.log('db ')
  var conn = mysql.createConnection({
    user: user,
    password: password,
    database: database,
    host: host,
    port: 3306
  });

  conn.connect((err) => {
    if (err) {
      console.log('db error ', err.code)
    }
    console.log('Connection to sql server successful');
    return conn;
  })
}

