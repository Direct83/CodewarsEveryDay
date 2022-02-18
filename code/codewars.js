const checkThreeAndTwo = (array) =>
	array.reduce((acc, el, index, arr) => {
		acc[el] = ++acc[el] || 1;
		if (index === arr.length - 1) {
			return Object.values(acc).every((el) => [3, 2].includes(el));
		}
		return acc;
	}, {});

console.log(checkThreeAndTwo(['a', 'a', 'a', 'b']));
