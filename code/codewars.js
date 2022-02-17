const validateWord = (string) =>
	[...string.toLowerCase()].reduce((acc, symbol, index, arr) => {
		acc[symbol] = ++acc[symbol] || 1;
		if (index === arr.length - 1) {
			const values = Object.values(acc);
			return values.every((el) => el === values[0]);
		}
		return acc;
	}, {});

console.log(validateWord('Abcabc'));
