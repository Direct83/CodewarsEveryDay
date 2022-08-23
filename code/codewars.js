const scrollingText = (text) =>
	(text = text.toUpperCase()) &&
	[...text].map((_, i) => text.slice(i) + text.slice(0, i));

console.log(scrollingText('abc'));
