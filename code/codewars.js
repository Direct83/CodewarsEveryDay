const countChar = (string, char) =>
	[...string].reduce((acc, el) => {
		if (el.toLowerCase() === char.toLowerCase()) {
			++acc;
		}
		return acc;
	}, 0);

const countChar2 = (str, count) => str.match(new RegExp(count, 'gi')).length;

console.log(countChar('Fancy fifth fly aloof', 'f'));
console.log(countChar2('Fancy fifth fly aloof', 'f'));
