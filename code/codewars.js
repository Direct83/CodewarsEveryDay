const longest = (words) =>
	words.reduce((a, word) => Math.max(a, word.length), 0);
