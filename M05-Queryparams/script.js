var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var logger = require("morgan");

app.use(logger("dev"));

app.get('/', (req, res) =>{
  res.send('id: ' + req.query.id);
});

app.get('/path/:color', (req, res) => {
  console.log(req.params.color);  
});

app.get('/color', (req, res, next) => {
  req.query.color1 === 'red'  
  req.query.color2 === 'blue'
})

app.listen(5500, function () {
  console.log("Server Berjalan");
});