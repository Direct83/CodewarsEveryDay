function paintLetterboxes(start, end) {
	const allNumbers = [...Array(end + 1).keys()].slice(start);

	const splitIntoDigits = allNumbers.map((num) => String(num).split(''));

	const allDigits = splitIntoDigits.flat();

	const startObject = [...Array(10).keys()].reduce(
		(acc, cur) => ({ ...acc, [cur]: 0 }),
		{}
	);

	const counted = allDigits.reduce(
		(acc, cur) => ({ ...acc, [cur]: acc[cur] + 1 }),
		startObject
	);

	const result = Object.entries(counted).reduce(
		(acc, cur) => [...acc, cur[1]],
		[]
	);

	return result;
}

console.log(paintLetterboxes(125, 132));
