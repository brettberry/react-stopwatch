var config = {
    port: 3000
};

var path = require('path');
var express = require('express');
var app = express();
var router = express.Router();

app.use('/static', express.static(path.join(__dirname, '..', 'public'))); // TODO replace serving static files with NginX
app.listen(config.port);
