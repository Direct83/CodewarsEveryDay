const isDivisible = (n, ...numbers) =>
	numbers.every((number) => n % number === 0);

console.log(isDivisible(3, 3, 4));
console.log(isDivisible(12, 3, 4));
