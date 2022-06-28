const solution = (pairs) =>
	Object.entries(pairs)
		.map((el) => el.join(' = '))
		.join(',');

console.log(solution({ a: 1, b: '2' })); // a = 1,b = 2
