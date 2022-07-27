const createDict = (keys, values) =>
	keys.reduce(
		(acc, el, index) => (
			(acc[el] =
				values[index] === null || values[index] === undefined
					? null
					: values[index]),
			acc
		),

		{}
	);

console.log(createDict(['a', 'b', 'c'], [1, 2, 3]));
console.log(createDict(['a', 'b', 'c'], [1, 2, 3, 4]));
console.log(createDict(['a', 'b', 'c', 'd'], [1, 2, 3]));
console.log(createDict(['a', 'b', 'c', 'd', 'e'], [1, 2, 0, false, '']));
