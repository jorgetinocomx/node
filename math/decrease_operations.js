const Math = {};

function substract(number1, number2) {
	return number1 - number2;
}

function divide(number1, number2) {
	if (number2 == 0) {
		console.log("Invalid zero division")
	}else{
		return number1 / number2;
	}
}


Math.substract = substract;
Math.divide = divide;

//This  is used for  exports objects, variables,  properties, functions
module.exports = Math;