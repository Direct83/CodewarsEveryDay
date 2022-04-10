const list1 = [
	{
		firstName: 'Noah',
		lastName: 'M.',
		country: 'Switzerland',
		continent: 'Europe',
		age: 19,
		language: 'C',
	},
	{
		firstName: 'Anna',
		lastName: 'R.',
		country: 'Liechtenstein',
		continent: 'Europe',
		age: 52,
		language: 'JavaScript',
	},
	{
		firstName: 'Ramon',
		lastName: 'R.',
		country: 'Paraguay',
		continent: 'Americas',
		age: 29,
		language: 'Ruby',
	},
	{
		firstName: 'George',
		lastName: 'B.',
		country: 'England',
		continent: 'Europe',
		age: 81,
		language: 'C',
	},
];

const countLanguages = (list) =>
	list.reduce((acc, people) => {
		acc[people.language] = ++acc[people.language] || 1;
		return acc;
	}, {});

console.log(countLanguages(list1));
