const extraPerfect = (n) =>
	[...Array(Math.round(n / 2))].reduce(
		(acc) => {
			const lastNumber = acc[acc.length - 1];
			if (lastNumber + 2 <= n) {
				acc = acc.concat(lastNumber + 2);
			}
			return acc;
		},
		[1]
	);

console.log(extraPerfect(3));
console.log(extraPerfect(28));
