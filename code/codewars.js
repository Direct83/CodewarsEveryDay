const solve = (a, b) =>
	b.reduce((acc, el) => {
		const count = a.filter((str) => el === str).length;
		acc = acc.concat(count);
		return acc;
	}, []);

console.log(solve(['abc', 'abc', 'xyz', 'abcd', 'cde'], ['abc', 'cde', 'uap']));
