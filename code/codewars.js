const makeBackronym = (string) =>
	string
		.split('')
		.map((el) => dict[el.toUpperCase()])
		.join(' ');

console.log(makeBackronym('dgm'));
