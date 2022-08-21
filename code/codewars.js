const pattern = (n) =>
	[...Array(n)].reduce((acc, _, index, arr) => {
		acc += `${1}${'*'.repeat(String(index))}${
			index + 1 === 1 ? '' : index + 1
		}${arr.length - 1 === index ? '' : '\n'}`;
		return acc;
	}, '');

console.log(pattern(3));
console.log(pattern(4));
