const lowercaseCount = (str) =>
	[...str].reduce((acc, word) => (/[a-z]/.test(word) ? ++acc : acc), 0);

console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
