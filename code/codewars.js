const baggage = [
	{ ticket: 1, baggage: ['a'] },
	{ ticket: 2, baggage: ['b'] },
	{ ticket: 3, baggage: ['c'] },
];

const passenger = [
	{ name: 'Vasya', ticket: 1, baggage: [] },
	{ name: 'Anya', ticket: 2, baggage: [] },
	{ name: 'Valera', ticket: 3, baggage: [] },
];

console.log(
	passenger.map((passenger) => ({
		...passenger,
		baggage: baggage.find((el) => el.ticket === passenger.ticket).baggage,
	}))
);
