const duplicates = (array) =>
	[...array].sort().reduce((acc, el, index, array) => {
		if (el === array[index + 1]) {
			++acc;
			array[index + 1] = null;
		}
		return acc;
	}, 0);

console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]));
console.log(duplicates([0, 0, 0, 0, 0, 0, 0]));
console.log(duplicates([1000, 1000]));
