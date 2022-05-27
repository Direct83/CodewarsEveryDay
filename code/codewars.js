const pattern = (n, acc = '') =>
	[...Array(n > 0 ? n : 0)]
		.map((_) => (acc = acc + n--))
		.reverse()
		.join(`\n`);

console.log(pattern(5));
