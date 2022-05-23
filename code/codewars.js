const bingo = (a) =>
	[2, 7, 9, 14, 15].every((el) => a.includes(el)) ? 'WIN' : 'LOSE';

console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // LOSE
console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10])); // WIN
console.log(bingo([23, 25, 9, 15, 4, 9, 13, 2, 6, 15])); // LOSE
