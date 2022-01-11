function findAB(numbers, c) {
	for (let i = 0; i < numbers.length; i++) {
		for (let j = 1 + i; j < numbers.length; j++) {
			if (numbers[i] * numbers[j] === c) {
				return [numbers[i], numbers[j]];
			}
		}
	}
	return null;
}

console.log(findAB([1, 2, 3], 3));
