var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var logger = require("morgan");

app.use(logger("dev"));

let myMiddleware = (req, res, next) => {
  if (req.params.nim === "2230") {
    console.log("Nim cocok");
    next();
  } else {
    const err = {
      status: "error",
      data: {
        nim: req.params.nim,
      },
    };
    next(err);
  }
};

app.get("/api/:nim/:nama", myMiddleware, function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.send(req.params);
});

app.use((error, req, res, next) => {
  res.send(error);
});

app.listen(5500, function () {
  console.log("Server Berjalan");
});