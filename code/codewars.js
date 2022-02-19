const uniqueSum = (lst) =>
	[...new Set(lst)].reduce((acc, number) => acc + number, null);

console.log(uniqueSum([1, 3, 8, 1, 8])); // 12
