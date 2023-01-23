const cors = require("cors");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 4000;
const express = require("express");

jsonServer.defaults({ readOnly: false });
server.use(express.json());
server.use(cors());
server.use(router);
server.listen(port);
