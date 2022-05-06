const list1 = [
	{
		firstName: 'Maria',
		lastName: 'Y.',
		country: 'Cyprus',
		continent: 'Europe',
		age: 30,
		language: 'Java',
	},
	{
		firstName: 'Victoria',
		lastName: 'T.',
		country: 'Puerto Rico',
		continent: 'Americas',
		age: 70,
		language: 'Python',
	},
];
const list2 = [
	{
		firstName: 'Noa',
		lastName: 'A.',
		country: 'Israel',
		continent: 'Asia',
		age: 20,
		language: 'Ruby',
	},
	{
		firstName: 'Andrei',
		lastName: 'E.',
		country: 'Romania',
		continent: 'Europe',
		age: 21,
		language: 'C',
	},
];

const list3 = [
	{
		firstName: 'Emily',
		lastName: 'A.',
		country: 'Northern Ireland',
		continent: 'Europe',
		age: 32,
		language: 'JavaScript',
	},
	{
		firstName: 'Nor',
		lastName: 'E.',
		country: 'Malaysia',
		continent: 'Asia',
		age: 21,
		language: 'Clojure',
	},
	{
		firstName: 'Maia',
		lastName: 'S.',
		country: 'Tahiti',
		continent: 'Oceania',
		age: 28,
		language: 'Clojure',
	},
	{
		firstName: 'Mohammad',
		lastName: 'N.',
		country: 'United Arab Emirates',
		continent: 'Asia',
		age: 39,
		language: 'C',
	},
	{
		firstName: 'Odval',
		lastName: 'F.',
		country: 'Mongolia',
		continent: 'Asia',
		age: 38,
		language: 'Python',
	},
	{
		firstName: 'Laia',
		lastName: 'P.',
		country: 'Andorra',
		continent: 'Europe',
		age: 55,
		language: 'Ruby',
	},
	{
		firstName: 'Sofia',
		lastName: 'P.',
		country: 'Italy',
		continent: 'Europe',
		age: 71,
		language: 'Clojure',
	},
	{
		firstName: 'Nikau',
		lastName: 'R.',
		country: 'New Zealand',
		continent: 'Oceania',
		age: 39,
		language: 'Ruby',
	},
	{
		firstName: 'Yerasyl',
		lastName: 'D.',
		country: 'Kazakhstan',
		continent: 'Asia',
		age: 22,
		language: 'Ruby',
	},
	{
		firstName: 'Margret',
		lastName: 'M.',
		country: 'Iceland',
		continent: 'Europe',
		age: 28,
		language: 'Java',
	},
];

const getAverageAge = (list) =>
	Math.round(list.reduce((sum, obj) => sum + obj.age, 0) / list.length);

console.log(getAverageAge(list1));
console.log(getAverageAge(list2));
console.log(getAverageAge(list3));
