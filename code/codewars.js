const numberJoy = (n) => {
	const sumNumbers = [...String(n)].reduce((a, b) => a + Number(b), 0);
	const result =
		sumNumbers * Number([...String(sumNumbers)].reverse().join(''));
	return result === n;
};

console.log(numberJoy(1997));
console.log(numberJoy(1458));
