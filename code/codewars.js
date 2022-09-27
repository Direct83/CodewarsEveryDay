const makePassword = (phrase) =>
	phrase
		.replace(/\s*(\w)\w*/g, `$1`)
		.replace(/o/gi, `0`)
		.replace(/i/gi, `1`)
		.replace(/s/gi, `5`);

console.log(makePassword('Give me liberty or give me death'));
