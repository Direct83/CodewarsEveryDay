const maxGap = (numbers) =>
	numbers
		.sort((a, b) => a - b)
		.reduce((acc, el, index, arr) => {
			const number = Math.abs(el - arr[index + 1]);
			if (number > acc) {
				acc = number;
			}
			return acc;
		}, 0);

console.log(maxGap([13, 10, 2, 9, 5]));
console.log(maxGap([24, 299, 131, 14, 26, 25]));
