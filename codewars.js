const squares = (x, n) =>
	[...Array(n < 0 ? 0 : n)].reduce((acc, el, index) => {
		const lastNumber = acc[acc.length - 1];
		const number = lastNumber ? acc[acc.length - 1] * acc[acc.length - 1] : x;
		return acc.concat(number);
	}, []);

console.log(squares(2, 1));

const disariumNumber = (n) =>
	[...String(n)].reduce((acc, el, index) => {
		acc += el ** (index + 1);
		return acc;
	}, 0) === n
		? 'Disarium !!'
		: 'Not !!';

console.log(disariumNumber(89)); // Disarium !!

function findEvenIndex(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (0 === arr.slice(1).sum) {
			return 0;
		}
		if (arr.slice(0, i - 1).sum === arr.slice(i).sum) {
			return 3;
		}
	}
	return -1;
}

console.log(findEvenIndex());
