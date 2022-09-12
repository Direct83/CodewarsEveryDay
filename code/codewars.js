const countArara = (n) =>
	`${`adak `.repeat(n / 2)}${`anane`.repeat(n % 2)}`.trim();

console.log(countArara(1));
console.log(countArara(3));
