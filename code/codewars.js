const spongeMeme = (sentence) =>
	[...sentence]
		.map((word, index) => (index % 2 ? word.toLowerCase() : word.toUpperCase()))
		.join('');

console.log(spongeMeme('stop Making spongebob Memes!'));
