const os = require("os");
const fs = require("fs");


console.log(os.hostname());
console.log(os.release());
console.log("Free memory", os.freemem());
console.log("Total memory", os.totalmem());

// this code is asynchronus.
fs.writeFile("./example.txt", "line 1", function(error){
	// callback
	if (error) {
		console.log("Generated error: ", error);
	}else{
		console.log("Created file");
	}
});

fs.readFile("./example.txt",  function (error, data) {
	// callback
	if (error) {
		console.log("Error reading file ",error);
	}else{
		console.log("Data in example.txt: ", data.toString());
	}
});


// because the previous  lines of code are async, 
// this line will be executed first.
console.log("Last line of code");