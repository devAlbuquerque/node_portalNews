/* Recuperando biblioteca do express e executando a função que o módulo express retorna */
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');
var consign = require('consign');
var express = require('express');
var app = express();

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./app/public'));
app.use(expressValidator());

/* Rotas */
/* Varrendo a pasta 'routes' e o arquivo do BD e adicionado ao 'app' */
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;