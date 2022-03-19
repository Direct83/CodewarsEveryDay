function evaluate(str) {
	const [operator, number1, number2] = str.replace(/\(|\)/g, '').split(' ');

	return eval(number1 + operator + number2);
}

console.log(evaluate('(* 3 3)'));
console.log(evaluate('(- 420 69)'));
