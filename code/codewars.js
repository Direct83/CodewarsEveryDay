function sumOfN(n) {
	const array = [];
	array[0] = 0;
	for (let i = 1; i < Math.abs(n) + 1; i++) {
		if (n > 0) array[i] = array[i - 1] + i;
		else array[i] = array[i - 1] - i;
	}
	return array;
}

console.log(sumOfN(3));
