const unluckyDays = (year) =>
	[...Array(12)].filter((_, index) => new Date(year, index, 13).getDay() === 5)
		.length;

console.log(unluckyDays(1586));
console.log(unluckyDays(1001));
