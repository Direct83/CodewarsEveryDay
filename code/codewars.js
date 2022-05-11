const productArray = (numbers) =>
	numbers.map((el) => numbers.reduce((a, b) => a * b) / el);

console.log(productArray([16, 17, 4, 3, 5, 2]));
