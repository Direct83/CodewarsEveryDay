const findMissingNumber = (sequence) => {
	if (!sequence.length) {
		return 0;
	}

	const arr = sequence
		.split(' ')
		.sort((a, b) => a - b)
		.map(Number);

	if (!arr.every((el) => !isNaN(el))) {
		return 1;
	}

	return arr.reduce((acc, el, index) => {
		if (el != index + 1 && !acc) {
			return (acc += index + 1);
		}
		return acc;
	}, 0);
};

console.log(findMissingNumber('2 6 4 5 3'));
console.log(findMissingNumber('1 2 3 5'));
console.log(findMissingNumber('2 6 1 5 3'));
console.log(findMissingNumber('1 3'));
console.log(findMissingNumber('1 5'));
console.log(findMissingNumber('2 1 4 3 a'));
