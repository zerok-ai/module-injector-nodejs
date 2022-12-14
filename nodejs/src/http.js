#!/usr/bin/env node

const http = require('node:http');

http.createServer((request, response) => {
  const proxy = http.request(request.url, { hostname: "localhost", port: 9000, headers: request.headers, method: request.method });
  proxy.once('response', proxyResponse => {
    proxyResponse.pipe(response);
  });
  request.pipe(proxy);
}).listen(8080);

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied to port 9000!' + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(9000);