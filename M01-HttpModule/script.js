const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write('<h1>M01-HttpModule Web Lanjutan</h1>'); 
  res.end(); 
}).listen(3200); 