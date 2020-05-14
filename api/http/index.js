const http = require("http");
const port = 3000;

const colors = require("colors");

const serverHandler = function (request, response) {
	// callback for  create server ending
	response.writeHead(200, {"content-type" : "text/html"});
	response.write("<h1>Hello world from NODEJS</h1>");
	response.end();
}
const server = http.createServer(serverHandler);
server.listen(port,function () {
	// init server callback
	console.log(colors.green("Server initiated on port :", port));
});