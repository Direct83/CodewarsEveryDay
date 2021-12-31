const min = (arr, toReturn) => {
	const minValue = Math.min(...arr);
	return toReturn === 'value' ? minValue : arr.indexOf(minValue);
};

console.log(min([1, 2, 3, 4, 5], 'value'));
console.log(min([1, 2, 3, 4, 5], 'index'));
