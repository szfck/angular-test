const app = require('./app');

const server = app.listen(app.get('port'), () => {
  console.log(('server running at http://localhost:%d in %s mode'), app.get('port'), app.get('env'));
});

export = server;