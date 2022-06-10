const swap = (string) =>
	[...string]
		.map((el) => (/[aeiouy]/.test(el) ? el.toUpperCase() : el))
		.join('');

const swap = (string) => string.replace(/[aeiou]/g, (el) => el.toUpperCase());

console.log(swap('Hello World!'));
