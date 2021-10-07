"use strict";

const player = require("./player");

const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const app = express();
const server = http.Server(app);

app.use(bodyParser.json());

app.get("/", function (_, res) {
  res.status(200).send("200 OK");
});

app.get("/version", function (_, res) {
  res.status(200).send(player.getVersion());
});

app.post("/bet", function (req, res) {
  res.status(200).send(player.bet(req.body).toString());
});

const port = process.env.PORT || 1337;

server.listen(port, function () {
  console.log("Server listening on port", server.address().port);
});
