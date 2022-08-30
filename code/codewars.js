function spacer(stringLength, textArr) {
	const spacesLength = stringLength - textArr.join('').length;
	const remains = spacesLength % (textArr.length - 1);
	const resultArray = textArr.map((el, index) =>
		index < remains ? el + ' ' : el
	);
	const countRepeat = spacesLength / (textArr.length - 1);
	return resultArray.join(' '.repeat(countRepeat > 0 ? countRepeat : 1));
}

console.log(spacer(1, ['s', 'e']));
console.log(spacer(20, ['this', 'is', 'example']));
console.log(spacer(8, ['123456']));
