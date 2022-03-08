const http = require('http');

const routes = require('./routes.js');
//const fs = require('fs');

const server = http.createServer(routes);

server.listen(4000);