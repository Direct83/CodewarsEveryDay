const twoSum = (numbers, target) =>
	numbers
		.map((value, index, arr) => [index, arr.indexOf(target - value, index + 1)])
		.filter((item) => item[1] > -1)[0];

console.log(twoSum([3, 2, 3], 6));
console.log(twoSum([3, 2, 4], 6));
