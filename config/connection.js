// Require the MySQL NPM package
var mysql = require("mysql");

var connection;

// JawsDB is an add-on for providing a fully functional MySQL Database server for the Heroku application.
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '12345678',
      database: 'burgers_db'
    });

    connection.connect(function(err) {
      if (err) throw err
    })
  };

/* // Make connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
 */
// Export connection for ORM to use
module.exports = connection;