function findSum(...args) {
	if (args.map((el) => el < 0).includes(true)) {
		return -1;
	}
	return args.reduce((acc, el) => acc + el, 0);
}

console.log(findSum());
console.log(findSum([1, 2]));

const arrCoca = [
	{ brand: 'nePepsi' },
	{ brand: 'Pepsi' },
	{ brand: 'nePepsi' },
	{ brand: 'Pepsi' },
];
const brands = arrCoca.map((el) => el.brand);
console.log(arrCoca.filter((_, index) => brands.indexOf('Pepsi') !== index));
