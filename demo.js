/*
* This is where we launch servers that will work with the load balancer
* Launch with: 'node demo.js 8001 (or 8002 or 8003) &' on terminal
*/
var http = require('http');
let PORT = process.argv.splice(2)[0];

//Create a basic server that responds to any request with 'Hello World'
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(PORT, function () {
    console.log('Server running at http://localhost:' + PORT + '/');
});
