var express = require('express'),
    server = express.createServer(),
    views = __dirname + '/views',
    pub = __dirname + '/static';
    
server.use('/js', express.static(pub + '/js'));
server.use('/css', express.static(pub + '/css'));
server.use('/img', express.static(pub + '/img'));
server.set('view engine', 'jade');
server.set('views', views);

server.get('/', function (req, res) {
    res.render('index');
});

server.listen(process.env.PORT || 8000);