const stantonMeasure = (arr) => {
	const number = arr.filter((el) => el === 1).length;
	return arr.filter((el) => el === number).length;
};
console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]));
console.log(stantonMeasure([1, 4, 1, 2, 11, 2, 3, 1]));
