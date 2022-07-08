const solve = (arr) =>
	[...Array(arr.sort((a, b) => a - b).length)].map((_, index) =>
		index % 2 ? arr.shift() : arr.pop()
	);

console.log(solve([15, 11, 10, 7, 12]));
