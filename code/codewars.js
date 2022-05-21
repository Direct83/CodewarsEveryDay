const twoOldestAges = (ages) =>
	ages
		.sort((a, b) => b - a)
		.slice(0, 2)
		.reverse();
