const streetFighterSelection = (fighters, [i, j], moves) => {
	return moves.map((move) => {
		if (move === 'up') i = Math.max(i - 1, 0);
		if (move === 'down') i = Math.min(i + 1, 1);
		if (move === 'left') j = (j - 1 + 6) % 6;
		if (move === 'right') j = (j + 1 + 6) % 6;

		return fighters[i][j];
	});
};

const fighters = [
	['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
	['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
];

const moves = ['up', 'left', 'right', 'left', 'left'];
console.log(streetFighterSelection(fighters, [0, 0], moves));
