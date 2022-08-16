const arithmeticSequenceSum = (a, r, n) =>
	[...Array(n)].reduce((acc, _, index) => (acc += a + r * index), 0);

console.log(arithmeticSequenceSum(2, 3, 5));
