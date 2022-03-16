const maxTriSum = (numbers) =>
	[...new Set(numbers)]
		.sort((a, b) => b - a)
		.slice(0, 3)
		.reduce((acc, number) => acc + number, 0);

console.log(maxTriSum([3, 2, 6, 8, 2, 3]));
