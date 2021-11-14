function findMin(arr) {
	const set = new Set(arr);
	let num = 1;

	while (set.has(num)) {
		num++;
	}

	return num;
}

console.log(findMin([-5, -2, -3])); // 1
console.log(findMin([1, 2, 3])); // 4
console.log(findMin([-1, -2, 7])); // 1
console.log(findMin([1, 2, 1, 4])); // 3
