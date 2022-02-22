const insertDash = (num) =>
	[...String(num)]
		.map((el, index, arr) => {
			if (el === '0' || index === arr.length - 1) {
				return el;
			}
			if (el % 2 !== 0 && arr[index + 1] % 2 !== 0) {
				return `${el}-`;
			}
			return el;
		})
		.join('');

console.log(insertDash(3785555));
