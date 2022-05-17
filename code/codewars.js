// const product = (s) =>
// 	s.replace(/[^?]/g, '').length * s.replace(/[^!]/g, '').length;

const product = (string) =>
	[...string].reduce(
		(acc, el, index, arr) => {
			if (el === '!' || el === '?') {
				acc[el] += 1;
			}
			return arr.length - 1 === index ? acc['!'] * acc['?'] : acc;
		},
		string.length !== 0 ? { '!': 0, '?': 0 } : 0
	);

console.log(product('!????!!!?'));
console.log(product(''));
