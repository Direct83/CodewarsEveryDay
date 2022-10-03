const calcType = (a, b, res) =>
	({
		[a + b]: `addition`,
		[a - b]: `subtraction`,
		[a * b]: `multiplication`,
		[a / b]: `division`,
	}[res]);

console.log(calcType(10, 4, 40));
console.log(calcType(10, 5, 5));
