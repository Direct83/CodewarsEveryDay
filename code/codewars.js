const range = (startNum, endNum) =>
	[...Array(endNum - 1 - startNum)].map((_, index) => index + 1 + startNum);

console.log(range(2, 9));
