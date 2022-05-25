const consecutive = (arr, a, b) =>
	arr.some(
		(el, index, arr) =>
			(el === a && arr[index + 1] === b) || (el === b && arr[index + 1] === a)
	);

console.log(consecutive([1, 3, 5, 7], 3, 7)); // false
console.log(consecutive([1, 3, 5, 7], 3, 1)); // true
