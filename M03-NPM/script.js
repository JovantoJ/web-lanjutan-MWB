let express = require('express');
let server = express();
let logger = require('morgan');


server.use(logger('dev'));

server.use(express.static(__dirname + "/html"));

server.listen(3200, function () {
  console.log("Server berjalan");
});