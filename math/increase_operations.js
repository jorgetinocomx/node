function add(number1, number2) {
		return number1 + number2;
}

function multiply(number1, number2) {
	return number1 * number2;
}

// This exports only one property for an object
exports.add = add;
exports.multiply = multiply;
