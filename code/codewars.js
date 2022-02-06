const removeConsecutiveDuplicates = (s) =>
	s
		.split(' ')
		.reduce(
			(acc, _, index, arr) => [
				...acc,
				...(arr[index] !== arr[index + 1] ? [arr[index]] : []),
			],
			[]
		)
		.join(' ');

console.log(
	removeConsecutiveDuplicates('alpha beta gamma delta alpha beta gamma delta')
);
