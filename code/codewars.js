const isNice = (arr) =>
	arr.length !== 0 &&
	arr.every((el) => arr.includes(el + 1) || arr.includes(el - 1));

console.log(isNice([2, 10, 9, 3]));
console.log(isNice([3, 4, 5, 7]));
console.log(isNice([-2, 5, 0, 5, 12]));
