const wordValue = (arr) =>
	arr.reduce((acc, el, i) => {
		const words = el.match(/[a-z]/gi);
		const countWords = words
			? words.reduce((acc, el) => acc + el.charCodeAt() - 96, 0)
			: 0;
		return acc.concat(countWords * (i + 1));
	}, []);

console.log(wordValue(['codewars', 'abc', 'xyz'])); // [88,12,225]
console.log(wordValue(['abc abc', 'abc abc', 'abc', 'abc', ' '])); // [12,24,18,24,0]
console.log(wordValue(['']));
