const dbSort = (array) =>
	array.sort(
		(a, b) =>
			(typeof a === 'string') - (typeof b === 'string') || (a > b) - (a < b)
	);
console.log(
	dbSort(['Apple', 46, '287', 574, 'Peach', '3', '69', 78, 'Grape', '423'])
);
// [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach']
