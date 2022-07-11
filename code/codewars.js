function numbersWithDigitInside(x, d) {
	const arr = [...Array(x)].reduce(
		(acc, _, index) =>
			new RegExp(d).test(String(index + 1))
				? (acc = acc.concat(index + 1))
				: acc,
		[]
	);

	return [
		arr.length,
		arr.reduce((acc, el) => acc + el, 0),
		arr.length ? arr.reduce((acc, el) => acc * el, 1) : 0,
	];
}

console.log(numbersWithDigitInside(11, 1));
console.log(numbersWithDigitInside(1, 0));
