const generateIntegers = (m, n) =>
	[...Array(n - m + 1)].map((_, index) => index + m);
