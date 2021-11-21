function prime(num) {
	return [...Array(num)].reduce((acc, el, i) => {
		const number = i + 1;
		return acc.concat((isPrime(number) && number) || []);
	}, []);
}

function isPrime(number) {
	for (let i = 2; i <= Math.sqrt(number); i++) {
		if (number % i === 0) return false;
	}
	return number !== 1;
}

console.log(prime(23)); // [2, 3, 5, 7, 11, 13, 17, 19, 23];
