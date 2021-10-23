const findDigit = (num, nth) =>
	nth > 0 ? +[...`${num}`].reverse()[--nth] || 0 : -1;

console.log(findDigit(5673, 4)) // 5
console.log(findDigit(-456, 4)) // 0
