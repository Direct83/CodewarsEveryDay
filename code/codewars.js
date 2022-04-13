function houseNumbersSum(inputArray) {
	const index = inputArray.findIndex((el) => el === 0);

	return inputArray.slice(0, index).reduce((acc, number) => acc + number, 0);
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
