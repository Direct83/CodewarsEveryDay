function battle(x, y) {
	const oneWordScore = [...x].reduce(
		(acc, el) => acc + el.charCodeAt() - 64,
		0
	);
	const twoWordScore = [...y].reduce(
		(acc, el) => acc + el.charCodeAt() - 64,
		0
	);
	if (oneWordScore === twoWordScore) {
		return 'Tie!';
	}
	return oneWordScore > twoWordScore ? x : y;
}

console.log(battle('ONE', 'TWO'));
console.log(battle('AAA', 'Z'));
console.log(battle('I', 'BX')); // bx
