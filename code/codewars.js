const summy = (stringOfInts) =>
	stringOfInts.split(' ').reduce((acc, number) => acc + Number(number), 0);

console.log(summy('1 2 3')); // 6
