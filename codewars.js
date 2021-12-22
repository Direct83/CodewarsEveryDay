const pairs = (ar) =>
	[...Array(Math.ceil(ar.length / 2))].reduce((acc) => {
		const numbers = ar.splice(0, 2);
		const consecutiveNumbers = numbers[0] > numbers[1] ? numbers[0] - numbers[1] : numbers[1] - numbers[0];
		acc += consecutiveNumbers === 1 ? 1 : 0;
		return acc;
	}, 0);
