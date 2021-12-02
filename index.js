const express =require("express");
const { Module } = require("module");
const path = require("path");
const { Socket } = require("socket.io");
const { isModuleNamespaceObject } = require("util/types");
const app = express();
require("dotenv").config();

//node server
const server = require("http").createServer(app);
module.exports.io =require("socket.io")(server);
require("./sockets/sockets");




const publicpath = path.resolve(__dirname, "public");

app.use(express.static(publicpath));

server.listen(process.env.PORT,(err)=>{

    if (err) throw new Error(err);

    console.log(" Servidor en marccha",process.env.PORT);
})