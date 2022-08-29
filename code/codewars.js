const findDup = (arr) =>
	arr.filter((el, index) => arr.indexOf(el) !== index)[0];

console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6]));
