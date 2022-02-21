function isVeryEvenNumber(num) {
	while (String(num).length > 1) {
		num = [...String(num)].reduce((acc, nos) => acc + Number(nos), 0);
	}
	return num % 2 === 0;
}

console.log(
	isVeryEvenNumber(1234)
	// 0, 4, 12, 222, 5, 45, 4554, 1234, 88, 24, 400000220
	// true, true, false, true, false, false, false, false, false, true, true
);
