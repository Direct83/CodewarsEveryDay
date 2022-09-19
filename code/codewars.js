const digits = (num) =>
	[...String(num)].reduce(
		(acc, number, index, arr) => [
			...acc,
			...arr.slice(++index).map((el) => Number(number) + Number(el)),
		],
		[]
	);

console.log(digits(156));
