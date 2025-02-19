const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',//qwerty
    database: 'joga_mysql'
});

connection.connect((err) => {
    if(err) throw err
    console.log('MySQL CONNECTED')

});

module.exports = connection;