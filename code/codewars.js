function calc(x) {
	const sum = (n) => [...n].reduce((a, b) => +a + +b);
	const total1 = x.replace(/./g, (x) => x.charCodeAt(0));
	const total2 = total1.replace(/7/g, '1');

	return sum(total1) - sum(total2);
}

console.log(calc('abcdef'));
