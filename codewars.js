const largestPairSum = (number) =>
	number
		.sort((a, b) => b - a)
		.slice(0, 2)
		.reduce((a, b) => a + b, 0);

console.log(largestPairSum([10, 14, 2, 23, 19])); // 42
