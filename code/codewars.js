function splitTheBill(x) {
	const average =
		Object.values(x).reduce((a, b) => a + b, 0) / Object.values(x).length;
	const values = Object.values(x).map((el) => el - average);
	return Object.assign(
		...Object.keys(x).map((key, index) => ({
			[key]: parseFloat(values[index].toFixed(2)),
		}))
	);
}

console.log(splitTheBill({ A: 20, B: 15, C: 10 }));
