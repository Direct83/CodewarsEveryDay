const nthChar = (words) =>
	words.reduce((acc, word, index) => acc + word[index], '');

console.log(nthChar(['yoda', 'best', 'has']));
