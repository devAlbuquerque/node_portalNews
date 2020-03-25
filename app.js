var app = require('./config/server');
var moduloDeTeste = require('./mod_prime');

app.listen(3000, function() {
    console.log(moduloDeTeste);
    console.log('App Iniciado');
})