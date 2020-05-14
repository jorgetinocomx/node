const express = require("express");
const colors = require("colors");


const server = express();
const port = 3000;

server.get("/", function (request,response) {
	response.send("<h1>Hello world with express</h1>");
})

server.listen(port, ()=>{
	console.log(colors.red( "Server on port : ", port ));
});