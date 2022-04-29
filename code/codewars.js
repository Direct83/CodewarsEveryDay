const lastSurvivor = (letters, coords) =>
	coords.reduce(
		(acc, coord) => acc.slice(0, coord) + acc.slice(coord + 1),
		letters
	);
