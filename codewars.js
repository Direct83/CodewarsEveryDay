const scale = (str, numberRepetitions, quantity) =>
	!str
		? str
		: str
				.split('\n')
				.map((word) =>
					[...Array(quantity)]
						.map((_) =>
							[...word].map((el) => el.repeat(numberRepetitions)).join('')
						)
						.join('\n')
				)
				.join('\n');

const scale = (str, numberRepetitions, quantity) => {
	if (str === '') {
		return '';
	}
	const words = str.split('\n');
	const resultArr = [];
	for (let i = 0; i < words.length; i++) {
		const innerWords = words[i].split('');
		const resultInnerWords = [];
		for (let i = 0; i < innerWords.length; i++) {
			resultInnerWords.push(innerWords[i].repeat(numberRepetitions));
		}
		resultArr.push((resultInnerWords.join('') + '\n').repeat(quantity));
	}
	return resultArr.join('').replace(/\n$/, '');
};

console.log(scale('abcd', 2, 3));
console.log(scale('', 5, 5));
console.log(scale('Kj\nSH', 1, 2)); // "Kj\nKj\nSH\nSH"

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

function add(a, b) {
	const result = '';
	const temp = 0;
	a = a.split('');
	b = b.split('');
	while (a.length || b.length || temp) {
		temp += ~~a.pop() + ~~b.pop();
		result = (temp % 10) + result;
		temp = temp > 9;
	}
	return result;
}

const factorial = (n) => {
	return n <= 1 ? 1 : n * factorial(n - 1);
};
