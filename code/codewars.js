const singleDigit = (n) =>
	String(n).length < 2
		? n
		: singleDigit(
				[...n.toString(2)].reduce((acc, number) => acc + Number(number), 0)
		  );

console.log(singleDigit(5665));
console.log(singleDigit(123456789));
console.log(singleDigit(5));
