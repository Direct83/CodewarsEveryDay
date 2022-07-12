function liftoff(instructions) {
	const result = instructions.sort((a, b) => b - a).join(' ');
	return `${result} liftoff!`;
}

console.log(liftoff([2, 8, 10, 9, 1, 3, 4, 7, 6, 5]));
