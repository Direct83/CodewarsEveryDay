function product(values) {
	if (values === null || !values.length) {
		return null;
	}

	return values.reduce((acc, el) => acc * el, 1);
}

console.log(product([5, 4, 1, 3, 9]));
console.log(product([]));
console.log(product(null));
