const findDeletedNumber = (arr, mixArr) =>
	arr.find((el) => !mixArr.includes(el)) || 0;

console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5])); // 2
console.log(findDeletedNumber([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])); // 0
