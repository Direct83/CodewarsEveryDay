const flatten = (array) => array.reduce((acc, el) => acc.concat(el), []);

console.log(
	flatten([
		[1, 2, 3],
		['a', 'b', 'c'],
		[1, 2, 3],
	])
);
