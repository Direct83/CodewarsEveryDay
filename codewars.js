const longestWord = (stringOfWords) =>
	stringOfWords.split(' ').reduce((acc, word) => (word.length >= acc.length ? word : acc), '');

console.log(longestWord('red blue grey'));
