const multiples = (s1, s2, s3) =>
	[...Array(s3 - s1)]
		.map((_, index) => index + s1)
		.filter((el) => !(el % s1 || el % s2));

console.log(multiples(13, 5, 800));
// [65, 130, 195, 260, 325, 390, 455, 520, 585, 650, 715, 780]
