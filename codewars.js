// ёлочка
const tree = (symbol, height) =>
	[...Array(height)]
		.map(
			(_, index) =>
				' '.repeat(height - index - 1) +
				symbol.repeat((index + 1) * 2 - 1) +
				' '.repeat(height - index - 1)
		)
		.join('\n');

console.log(tree('8', 5));
//    8
//   888
//  88888
// 8888888
//888888888

// сортируем только не четные
console.log([5, 7, 3, 9, 2, 6].sort((a, b) => a % 2 && a - b)); // [3,5,7,9,2,6]

const average = (scores) =>
	Math.round(scores.reduce((a, b) => a + b) / scores.length);
