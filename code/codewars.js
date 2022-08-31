const smaller = (nums) =>
	nums.map(
		(number, index) => nums.slice(index).filter((el) => el < number).length
	);

console.log(smaller([5, 4, 3, 2, 1]));
