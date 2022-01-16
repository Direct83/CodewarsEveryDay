const pattern = (n) =>
	n < 1
		? ''
		: [...Array(n)].map((_, index) => `${++index}`.repeat(index)).join('\n');

console.log(pattern(2));
