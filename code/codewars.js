const incrementer = (numbers) => numbers.map((number, index) => (++index + number) % 10);

console.log(incrementer([4, 6, 7, 1, 3])); // [ 5, 8, 0, 5, 8 ]

function sum(digits) {
	try {
		const numbers = digits
			.toString()
			.split('')
			.map((symbol) => parseInt(symbol));
		return `${numbers.join(' + ')} = ${numbers.reduce((a, b) => a + b)}`;
	} catch (e) {
		return '';
	}
}

console.log(sum('268482898706045')); // 2 + 6 + 8 + 4 + 8 + 2 + 8 + 9 + 8 + 7 + 0 + 6 + 0 + 4 + 5 = 77

const betweenExtremes = (numbers) => Math.max(...numbers) - Math.min(...numbers);

console.log(betweenExtremes([21, 34, 54, 43, 26, 12])); // 42

function digitsAverage(input) {
	if (input < 10) {
		return input;
	}
	while (input > 9) {
		input = String(input);
		let array = [];
		for (let i = 0; i < input.length - 1; i++) {
			array.push(Math.round((+input[i] + +input[i + 1]) / 2));
		}
		input = +array.join('');
	}
	return input;
}

console.log(digitsAverage(246)); // 4
