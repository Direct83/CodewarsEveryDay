const capitalize = (s, arr) =>
	arr.reduce((acc, el) => {
		const word = acc[el] ? acc[el].toUpperCase() : '';
		return acc.slice(0, el) + word + acc.slice(el + 1);
	}, s);

console.log(capitalize('abcdef', [1, 2, 5, 100])); // 'aBCdeF'
