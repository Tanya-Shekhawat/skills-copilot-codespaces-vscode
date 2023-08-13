// Create web server
// Create a web server that can respond to requests for /comments.json
// with a JSON string of comments back to the browser.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var myObj = {
        name: 'Ryu',
        job: 'Ninja',
        age: 29
    };
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '')