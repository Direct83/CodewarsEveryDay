const alternateCase = (string) =>
	[...string].reduce((acc, el) => {
		const alternateCase =
			el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase();
		return acc + alternateCase;
	}, '');

console.log(alternateCase('abc'));
console.log(alternateCase('ABC'));
