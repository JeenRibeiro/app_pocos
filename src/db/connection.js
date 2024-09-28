// db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // ou o endereço do seu servidor MySQL
  user: 'root', // seu usuário do MySQL
  password: '', // sua senha do MySQL
  database: 'apppocos' // nome do seu banco de dados
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL: ' + err.stack);
    return;
  }
  console.log('Conectado ao MySQL como id ' + connection.threadId);
});

module.exports = connection;
