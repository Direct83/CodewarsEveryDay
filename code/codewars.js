const tidyNumber = (num) =>
	[...String(num)]
		.map(Number)
		.every((el, index, arr) =>
			el <= arr[index + 1] ? true : arr[index + 1] === undefined ? true : false
		);

function stringMerge(string1, string2, letter) {
	const wordOne = string1.slice(0, string1.indexOf(letter));
	const wordTwo = string2.slice(string2.indexOf(letter));
	return wordOne + wordTwo;
}

console.log(stringMerge('abcdefxxxyzz', 'abcxxxyyyxyzz', 'x'));
console.log(stringMerge('apowiejfoiajsf', 'iwahfeijouh', 'j'));
