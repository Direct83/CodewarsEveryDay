function add(a, b) {
	let str = '';
	while (a || b) {
		str = (a % 10) + (b % 10) + str;
		a = Math.floor(a / 10);
		b = Math.floor(b / 10);
	}
	return +str;
}

console.log(add(11, 99)); // 1010
console.log(add(122, 81)); // 1103
console.log(add(38810, 1383)); // 391193
