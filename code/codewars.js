const num = '8888888811222333455666777777';

const luckyNumber = (stringOfNumber) =>
	[...stringOfNumber].reduce(
		(acc, number, index) => {
			const isLastIndex = index === stringOfNumber.length - 1;
			acc.countNumber[number] = ++acc.countNumber[number] || 1;
			if (isLastIndex) {
				acc.luckyNumber = Object.entries(acc.countNumber).reduce((acc, [key, value]) => {
					acc = Number(key) === value ? value : acc;
					return acc;
				}, null);
			}
			return isLastIndex ? acc.luckyNumber : acc;
		},
		{ countNumber: {}, luckyNumber: null }
	);

console.log(luckyNumber(num));

const argQuery = 'user.name.firstname=Ivan&user.name.secondname=Vidutin&user.city=Perm';

const queryObjectify = (query) => {
	const rootObject = {};
	query.split('&').forEach((chunk) => {
		const [keys, value] = chunk.split('=');
		let indicator = rootObject;
		keys.split('.').forEach((key, index, arr) => {
			if (!indicator[key]) {
				indicator[key] = index === arr.length - 1 ? value : {};
			}
			indicator = indicator[key];
		});
	});
	return rootObject;
};

console.log(queryObjectify(argQuery));

const reverse = (array) => array.reduce((acc, el) => [el].concat(acc), []);

console.log(reverse([1, 2, 3]));
