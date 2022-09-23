const reverse = (number, acc = 0) => {
	if (!number) {
		return acc;
	}

	acc = acc * 10 + (number % 10);

	return reverse(Math.floor(number / 10), acc);
};

console.log(reverse(123));

const chain = (input, fs) => fs.reduce((acc, el) => el(acc), input);
