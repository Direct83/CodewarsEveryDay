const unusedDigits = (...arg) =>
	arg
		.reduce(
			(acc, el) => acc.filter((number) => ![...String(el)].includes(number)),
			['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
		)
		.join('');

console.log(unusedDigits(12, 34, 56, 78));
console.log(unusedDigits(2015, 8, 26));
