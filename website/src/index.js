const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// settings
app.set("port", port); //define a global variable  using express
app.set("views", path.join(__dirname, "views")); // configure express server for locate the folder views
app.set("view engine", "ejs"); //ejs is a module and not need to be required becasuse "express module" works tish ejs


// middlewares


// routes

app.get("/" , (req,resp) =>{
	resp.sendFile( path.join(__dirname , "views/index.html"));
});

app.get("/ejs" , (req,resp) =>{
	resp.render("index" , {title : "Title set from index.js" });
});

// static files


// START
app.listen(port,function (request,response) {
	// body...
	console.log("Server on port : ", port);
})