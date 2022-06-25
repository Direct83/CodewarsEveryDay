const check = (obj) => {
	const message =
		obj.even > obj.odd
			? 'Even is greater than Odd'
			: 'Odd is greater than Even';
	return obj.even === obj.odd ? 'Even and Odd are the same' : message;
};
const evenOrOdd = (str) =>
	[...str].reduce(
		(acc, el, index, arr) => {
			el % 2 === 0 ? (acc.even += Number(el)) : (acc.odd += Number(el));
			return arr.length - 1 === index ? check(acc) : acc;
		},
		{ even: 0, odd: 0 }
	);

console.log(evenOrOdd('12'));
console.log(evenOrOdd('112'));
