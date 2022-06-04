const twoSum = (numbers, target) =>
	numbers
		.map((value, index, arr) => [index, arr.indexOf(target - value, index + 1)])
		.filter((item) => item[1] > -1)[0];

console.log(twoSum([3, 2, 3], 6));
console.log(twoSum([3, 2, 4], 6));

const addTwoNumbers = (l1, l2) =>
	[
		...String(Number(l1.reverse().join('')) + Number(l2.reverse().join(''))),
	].reverse();

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); // [7,0,8]
