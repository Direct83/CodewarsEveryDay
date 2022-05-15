const save = (sizes, hd) => {
	if (!sizes.length) {
		return 0;
	}

	return sizes.reduce(
		(acc, el, index) => {
			if ((acc.sum += el) <= hd) {
				acc.count += 1;
			}
			return sizes.length - 1 === index ? acc.count : acc;
		},
		{ sum: 0, count: 0 }
	);
};

console.log(save([4, 4, 4, 1, 1], 11)); // 2
console.log(save([4, 8, 15, 16, 23, 42], 108)); // 6
console.log([], 69);
