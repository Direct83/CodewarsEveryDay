const sumOfIntegersInString = (s) =>
	s.split(/[^0-9]/).reduce((acc, number) => acc + Number(number), 0);

console.log(sumOfIntegersInString('12.4'));
