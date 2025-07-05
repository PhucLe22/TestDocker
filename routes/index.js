const HomeRouter = require('./home'); // indicates the path
const UserRouter = require('./user');

function route(app) {
    app.use('/', HomeRouter);
    app.use('/user', UserRouter);
}

module.exports = route;