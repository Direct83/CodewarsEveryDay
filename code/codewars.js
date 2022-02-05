const initializeNames = (name) =>
	name
		.split(' ')
		.reduce((acc, word, index, arr) => {
			if (index === 0 || index === arr.length - 1) {
				acc += word + ' ';
			}
			if (index !== 0 && index !== arr.length - 1) {
				acc += word[0] + '. ';
			}
			return acc;
		}, '')
		.trim();

// const initializeNames = (name) => name.replace(/ (\w)\w*(?= )/g, ' $1.');

console.log(initializeNames('Alice Betty Catherine Davis'));
