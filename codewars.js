const divCon = (x) =>
	x.reduce((acc, number) => (typeof number === 'string' ? acc - Number(number) : acc + Number(number)), 0);

console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])); // 14
