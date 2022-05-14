const getStrings = (city) =>
	[...city.toLowerCase()].reduce((acc, el, index, arr) => {
		if (/[a-z]/i.test(el)) {
			acc[el] = ++acc[el] || 1;
		}
		return arr.length - 1 === index
			? Object.entries(acc)
					.map((el) => [el[0], '*'.repeat(el[1])].join(':'))
					.join(',')
			: acc;
	}, {});

console.log(getStrings('Chicagoc'));
console.log(getStrings('Las Vegas'));
