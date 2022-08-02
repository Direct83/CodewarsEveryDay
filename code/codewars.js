const filterEvenLengthWords = (words) =>
	words.filter((el) => el.length % 2 === 0).length;

console.log(filterEvenLengthWords(['One', 'Two', 'Three', 'Four']));
