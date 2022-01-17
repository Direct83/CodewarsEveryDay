const findEvenIndex = (arr) =>
	arr.findIndex(
		(_, idx) =>
			arr.slice(0, idx + 1).reduce((pre, val) => pre + val) ===
			arr.slice(idx).reduce((pre, val) => pre + val)
	);

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
