// launch with: 'node load-balancer.js 8000' on terminal
let PORT = process.argv.splice(2)[0];  // 8000
let httpProxy = require('http-proxy');

// Ports to use in the round robin proxy
let ports = [8001, 8002, 8003];

let i = 0;
httpProxy.createServer(function (req, res, proxy) {
    proxy.web(req, res, { target: 'http://localhost:' + ports[i] + '/'});
    i = (i + 1) % ports.length;
}).listen(PORT || 8000);
