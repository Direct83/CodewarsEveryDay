function splitList(values: number[]): number[][] {
	return [
		values.slice(0, Math.round(values.length / 2)),
		values.slice(Math.round(values.length / 2)),
	];
}

console.log('Example:');
console.log(splitList([1, 2, 3, 4, 5, 6])); // [[1, 2, 3], [4, 5, 6]]
console.log(splitList([1, 2, 3])); // [[1, 2], [3]]
console.log(splitList([1])); // [[1], []])
console.log(splitList([])); // [[], []]
