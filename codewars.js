function calculate(num1, operation, num2) {
	if (/\w/.test(operation) || (/\//.test(operation) && num2 === 0)) {
		return null;
	}
	switch (operation) {
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
		case '/':
			return num1 / num2;
		case '*':
			return num1 * num2;
	}
}

console.log(calculate(3.2, '+', 8));
console.log(calculate(-3, '/', 0));
console.log(calculate(-3, 'm', 0));
