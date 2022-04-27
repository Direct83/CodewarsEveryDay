function sortMyString(str) {
	const arrStr = [...str];
	const even = arrStr.filter((_, i) => i % 2 === 0).join('');
	const odd = arrStr.filter((_, i) => i % 2 !== 0).join('');
	return even + ' ' + odd;
}

console.log(sortMyString('CodeWars'));
