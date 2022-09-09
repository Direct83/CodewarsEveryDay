const consecutive = (arr) =>
	(Math.max(...arr) - Math.min(...arr) - arr.length + 1) | 0;

console.log(consecutive([4, 8, 6]));
console.log(consecutive([1, 2, 3, 4]));
