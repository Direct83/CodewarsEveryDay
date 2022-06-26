const getMissingElement = (superImportantArray) =>
	[...Array(10).keys()].find(
		(_, index) => !superImportantArray.includes(index)
	);

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]));
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]));
console.log(getMissingElement([6, 1, 2, 4, 3, 5, 7, 8, 9]));
