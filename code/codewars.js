const isNarcissistic = (n) =>
	[...String(n)].reduce((acc, el, _, arr) => {
		acc += el ** arr.length;
		return acc;
	}, 0) === n;

console.log(isNarcissistic(1634));
console.log(isNarcissistic(8208));
