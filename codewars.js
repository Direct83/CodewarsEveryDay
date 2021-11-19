const sum = (firstNumber, result = firstNumber) =>
	(next = (secondNumber) => {
		if (secondNumber !== undefined) {
			result += secondNumber;
			return next;
		}
		return result;
	});

console.log(sum(1)()); // 1
console.log(sum(1)(2)()); // 3
console.log(sum(1)(2)(3)()); // 6
console.log(sum(1)(2)(3)(4)()); // 10
console.log(sum(1)(2)(3)(4)(5)()); // 15
