const mysql      = require('mysql');

var tpdb = 'json'

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "adv@102030",
//   database: 'db_advanced',
//   insecureAuth : true,
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

var pool = mysql.createPool({
    // connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'adv@102030',
    database: 'db_advanced',
  insecureAuth : true,

})

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release()
    return
})

module.exports = pool