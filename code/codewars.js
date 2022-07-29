const prevMultOfThree = (n) =>
	n % 3 ? prevMultOfThree((n / 10) ^ 0) : n || null;
