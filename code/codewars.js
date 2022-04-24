const minimumSteps = (numbers, value) =>
	numbers
		.sort((a, b) => a - b)
		.reduce(
			(acc, el, index) => {
				if (acc.sum < value) {
					acc.sum += el;
					acc.count = index;
				}
				return acc;
			},
			{ sum: 0, count: 0 }
		).count;

console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464));
console.log(minimumSteps([8, 9, 10, 4, 2], 23));
console.log(minimumSteps([10, 9, 9, 8], 17));
console.log(minimumSteps([4, 6, 3], 7));
