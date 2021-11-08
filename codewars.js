const count = (array) =>
	array.reduce((acc, el) => {
		acc[el] = ++acc[el] || 1;
		return acc;
	}, {});

console.log(count(['a', 'a', 'b', 'b', 'b'])); // { 'a': 2, 'b': 3 }
