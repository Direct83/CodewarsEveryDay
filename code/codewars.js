const evenLast = (numbers) =>
	numbers.reduce(
		(acc, el, index, arr) =>
			index % 2 === 0 ? acc + el * arr[arr.length - 1] : acc,
		0
	);

console.log(evenLast([2, 3, 4, 5]));
