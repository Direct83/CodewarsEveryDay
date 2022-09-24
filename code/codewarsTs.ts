const capital = (capitals) =>
	capitals.map(
		({ country, state, capital }) =>
			`The capital of ${country || state} is ${capital}`
	);

console.log(
	capital([
		{ state: 'Maine', capital: 'Augusta' },
		{ country: 'Spain', capital: 'Madrid' },
	])
);
