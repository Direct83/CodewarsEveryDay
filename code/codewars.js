const filterLucky = (arr) => arr.filter((number) => [...String(number)].includes('7'));

console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]));

const rgb = (r, g, b) => {
	return toHex(r) + toHex(g) + toHex(b);
};

const toHex = (color) => {
	if (color > 255) return 'FF';
	else if (color < 0) return '00';
	else return color.toString(16).padStart(2, '0').toUpperCase();
};

console.log(rgb(300, 255, 255));
