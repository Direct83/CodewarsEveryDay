const catchSignChange = (arr) =>
	arr.reduce((acc, el, index, arr) => {
		if (el < 0 && arr[index - 1] >= 0) {
			acc += 1;
		}
		if (el >= 0 && arr[index - 1] < 0) {
			acc += 1;
		}
		return acc;
	}, 0);

console.log(catchSignChange([1, -2, -7, -4, 4, -2, 0, -3, 3]));
