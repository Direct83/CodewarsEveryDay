const jumpingNumber = (number) =>
	[...String(number)].every(
		(number, index, array) =>
			index < 1 || Math.abs(number - array[index - 1]) === 1
	)
		? 'Jumping!!'
		: 'Not!!';

console.log(jumpingNumber(79));
console.log(jumpingNumber(98789876));
