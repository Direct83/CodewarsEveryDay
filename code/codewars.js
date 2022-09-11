const peak = (arr) =>
	arr.reduce((acc, _, index, arr) => {
		const condition =
			arr.slice(index + 1).reduce((a, b) => a + b, 0) ===
			arr.slice(0, index).reduce((a, b) => a + b, 0);
		if (condition && acc === -1) {
			acc = index;
		}
		return acc;
	}, -1);

console.log(peak([1, 2, 3, 5, 3, 2, 1]));
console.log(peak([1, 12, 3, 3, 6, 3, 1]));
console.log(
	peak([
		5, 5, 9, 10, 1, 7, 9, 3, 1, 2, 5, 6, 5, 8, 7, 6, 3, 7, 8, 7, 1, 7, 1, 4, 6,
		8, 9, 9, 7, 1, 4, 4, 5, 1, 2, 5, 5, 6, 4, 7, 7, 2, 2, 8, 10, 3, 5, 5, 9, 10,
		1, 7, 9, 3, 1, 2, 5, 6, 5, 8, 7, 6, 3, 7, 8, 7, 1, 7, 1, 4, 6, 8, 9, 9, 7,
		1, 4, 4, 5, 1, 2, 5, 5, 6, 4, 7, 7, 2, 2, 8, 10,
	])
);
