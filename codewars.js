const strong = (n) =>
	[...String(n)].reduce((acc, el) => {
		acc = acc + [...Array(Number(el))].reduce((acc, _, i) => acc * (i + 1), 1);
		return acc;
	}, 0) === n
		? 'STRONG!!!!'
		: 'Not Strong !!';

console.log(strong(145)); // 'STRONG!!!!'
