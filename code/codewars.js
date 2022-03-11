const mergeArrays = (firstArray, secondArray) =>
	[...Array(Math.max(firstArray.length, secondArray.length))]
		.reduce((acc, _, i) => acc.concat(firstArray[i], secondArray[i]), [])
		.filter(Boolean);

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c']));
