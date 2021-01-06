var mysql = require('mysql');

// Create Connetion to Database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'secret',
    database:'my_app_2021'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql Connected');
});

module.exports = conn;