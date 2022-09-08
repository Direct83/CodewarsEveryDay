const makeValley = (arr) => [
	...arr.sort((a, b) => b - a).filter((_, index) => !(index % 2)),
	...arr.filter((_, index) => index % 2).reverse(),
];

console.log(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]));
