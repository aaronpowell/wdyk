var express = require('express'),
    server = express.createServer(),
    routing = require('./lib/routing');
    
routing.boot(server, express);    
    
server.listen(process.env.PORT || 8000);