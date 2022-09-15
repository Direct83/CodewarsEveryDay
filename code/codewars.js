function dotCalculator(equation) {
	const [first, sign, second] = equation.split(' ');
	switch (sign) {
		case '+':
			return '.'.repeat(first.length + second.length);
		case '-':
			return '.'.repeat(first.length - second.length);
		case '*':
			return '.'.repeat(first.length * second.length);
		default:
			return '.'.repeat(first.length / second.length);
	}
}

console.log(dotCalculator('..... // ..'));
