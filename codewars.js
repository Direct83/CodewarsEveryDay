function cubeOdd(arr) {
	if (arr.find((el) => typeof el !== 'number')) {
		return undefined;
	}
	return arr.reduce((acc, el, i) => {
		const number = el ** 3;
		acc = number % 2 !== 0 ? acc + number : acc;
		return acc;
	}, 0);
}

console.log(cubeOdd([1, 2, 3, 4])); // 28
console.log(cubeOdd([-3, -2, 2, 3]));
