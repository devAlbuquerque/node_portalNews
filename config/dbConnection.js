var mysql = require('mysql');

var getConnection = function() {
    console.log('Conexão criada em dbConnection');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'portal_noticias'
    });
}

module.exports = function(){
    console.log('Autoload carregou módulo de conexão em dbConnection');
    return getConnection;
}