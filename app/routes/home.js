module.exports = function (app) {
    app.get('/', function (req, res) {
        app.app.controllers.home.index(app, req, res);
    });

    app.get('/index', function (req, res) {
        app.app.controllers.home.index(app, req, res);
    });
}