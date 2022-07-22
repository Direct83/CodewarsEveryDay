const getMissingNumbers = (numbers) =>
	[...new Set(numbers)]
		.sort((a, b) => a - b)
		.reduce((acc, el, index, arr) => {
			const nextNumber = arr[index + 1];

			if (el !== nextNumber && nextNumber !== undefined) {
				const numbers = [...Array(nextNumber - el - 1)].map(
					(_, index) => index + 1 + el
				);
				acc.push(...numbers);
			}

			if (arr.length === 1 && numbers.length === 2) {
				acc.push(el + 1);
			}

			return acc;
		}, []);

console.log(getMissingNumbers([1, 10]));
console.log(getMissingNumbers([15, 20]));
console.log(getMissingNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(getMissingNumbers([1, 2]));
console.log(getMissingNumbers([1, 1]));

function shorter_reverse_longer(a, b) {
	const longer = a.length >= b.length ? a : b;
	const shorter = a.length <= b.length ? a : b;

	return `${shorter}${[...longer].reverse().join('')}${shorter}`;
}
console.log(shorter_reverse_longer('first', 'abcde'));
