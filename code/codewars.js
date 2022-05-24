const findAll = (array, n) =>
	array.reduce((acc, el, index) => {
		if (el === n) {
			acc = acc.concat(index);
		}
		return acc;
	}, []);
