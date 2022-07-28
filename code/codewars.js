const change = (str) =>
	'abcdefghijklmnopqrstuvwxyz'
		.split('')
		.map((el) => (str.toLowerCase().includes(el) ? 1 : 0))
		.join('');

console.log(change('a **&  bZ'));
console.log(change('!!a$%&RgTT')); // '10000010000000000101000000'
