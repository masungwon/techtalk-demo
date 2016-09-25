/*
* This is a simple round-robin load balancer
* Launch with: 'node load-balancer.js 8000' on terminal
*/
let PORT = process.argv.splice(2)[0];  // 8000
let httpProxy = require('http-proxy');
const proxy = httpProxy.createServer();
const http = require('http');

// List of servers we want to use in the rotation
let addresses = [
    {
        host: 'localhost',
        port: 8001
    },
    {
        host: 'localhost',
        port: 8002
    },
    {
        host: 'localhost',
        port: 8003
    }
];

http.createServer(function (req, res) {
    // on each request, get the first location from the addresse list
    let target = { target: addresses.shift() };

    // proxy to the server whose 'turn' it is
    console.log('balancing request to: ', target);
    proxy.web(req, res, target);

    // and then the server you just used becomes the last item on the list
    addresses.push(target.target);

}).listen(PORT || 8000);
