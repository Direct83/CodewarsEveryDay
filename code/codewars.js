const elevatorDistance = (array) =>
	array.reduce(
		(acc, el, index, array) => (acc += Math.abs(el - array[index + 1] || 0)),
		0
	);

console.log(elevatorDistance([5, 2, 8]));
