var express = require('express');
var mysql = require('mysql'); 
var app = express();

var pool = mysql.createPool({
host: 'localhost',
user: 'root',
password: null,
database: 'test_db',
});
app.get('/user', function(req, res){

var sql = 'SELECT * FROM `m_user`';
pool.query(sql, function(error, result){
if (error) throw error;
console.log('– USER TABLE — ' , result);
res.json(result); 
});
});
app.listen('2244','127.0.0.1');
console.log('—– server is listening —–');