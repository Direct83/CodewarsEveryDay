const getAges = (sum, difference) =>
	sum < 0 || difference < 0 || sum < difference
		? null
		: [(sum + difference) / 2, (sum - difference) / 2];

console.log(getAges(24, 4));
