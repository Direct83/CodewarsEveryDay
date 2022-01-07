const well = (inputArray) =>
	['Fail!', 'Publish!', 'Publish!', 'I smell a series!'][
		Math.min(3, inputArray.filter((idea) => idea === 'good').length)
	];
// function well(inputArray) {
// 	const goodCounter = inputArray.filter((idea) => idea === 'good').length;
// 	const isSeries = goodCounter > 2 ? 'I smell a series!' : 'Publish!';
// 	return goodCounter !== 0 ? isSeries : 'Fail!';
// }
console.log(well(['bad', 'bad', 'bad', 'bad']));

const calculate = (str) =>
	str
		.split('plus')
		.join(' ')
		.split('minus')
		.join(' -')
		.split(' ')
		.reduce((a, i) => a + +i, 0);

console.log(calculate('1plus2plus3minus4')); // 2
