const arr = [2, 3, 1, 4, 5, 6, 7];
function maxMinChange(arr) {
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	return arr.map((el, index, arr) => {
		if (arr.lastIndexOf(max) === index) {
			el = min;
		}
		if (arr.lastIndexOf(min) === index) {
			el = max;
		}
		return el;
	});
}

console.log(maxMinChange(arr));
