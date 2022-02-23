const numberToPower = (number, power) =>
	[...Array(power)].reduce((acc) => acc * number, 1);

console.log(numberToPower(10, 4));
