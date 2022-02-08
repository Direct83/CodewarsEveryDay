const countLettersAndDigits = (input) =>
	input.length - input.replace(/[0-9a-z]/gi, '').length;

console.log(countLettersAndDigits('*14(K. 3'));
