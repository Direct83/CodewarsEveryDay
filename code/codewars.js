const swap = (str) =>
	[...str]
		.map((el) =>
			el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase()
		)
		.join('');

console.log(swap('CodeWars'));
