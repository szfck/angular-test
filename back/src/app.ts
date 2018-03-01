import './config/env';
import * as express from 'express';
import * as path from 'path';

var app = express();

app.set('port', process.env.PORT || 3000);

require('./api/hero')(app);

// Serve the web content
app.use('/', express.static(path.join(__dirname, '../../front/dist')));

module.exports = app;