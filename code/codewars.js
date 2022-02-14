const divisibleByThree = (str) =>
	[...str].reduce((a, b) => a + Number(b), 0) % 3 === 0;
