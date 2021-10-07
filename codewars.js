function sumTriangularNumbers(n) {
	if (n < 0) {
		return 0
	}

	const sum = sumTriangularNumbers(n-1)
	return sum + (n * (n + 1)) / 2
}

console.log(sumTriangularNumbers(6))
