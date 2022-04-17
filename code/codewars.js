const lostSheep = (friday, saturday, total) =>
	friday.concat(saturday).reduce((acc, el) => acc - el, total);

console.log(lostSheep([1, 2], [3, 4], 15));
