function solve(a, b) {
	const first = a.replace(new RegExp(`[${b}]`, 'g'), '');
	const second = b.replace(new RegExp(`[${a}]`, 'g'), '');
	return first + second;
}

console.log(solve('xxx', 'xzca')); // zca
