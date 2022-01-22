const getSumOfDigits = (integer) =>
	[...String(integer)].reduce((acc, number) => acc + Number(number), 0);

console.log(getSumOfDigits(123)); // 6
