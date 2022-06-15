const isNonDecreasingOrder = (number) =>
	String(number)
		.split('')
		.every((el, index, arr) =>
			arr.length - 1 === index ? true : el <= arr[index + 1]
		);

function sumDigits(number) {
	let result = 0;
	let digit;

	while (number) {
		digit = number % 10;
		result += digit;
		number = (number - digit) / 10;
	}

	return result;
}

const findAll = (n, k) => {
	const maxNumber = Number('9'.repeat(k)) + 1;
	let results = [];
	let count = Number('1' + '0'.repeat(k - 1));

	while (count < maxNumber) {
		if (sumDigits(count) === n && isNonDecreasingOrder(count)) {
			results.push(count);
		}
		++count;
	}

	if (results.length === 0) {
		return [0];
	}

	return [results.length, results[0], results[results.length - 1]];
};

console.log(findAll(10, 3)); // [8, 118, 334]
console.log(findAll(27, 3)); // [1, 999, 999]
console.log(findAll(28, 3)); // [0]
console.log(findAll(10, 8));
