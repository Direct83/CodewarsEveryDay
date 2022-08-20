const solve = (s) =>
	[...s]
		.sort()
		.every((el, index, arr) =>
			arr.length - 1 !== index
				? el.charCodeAt() + 1 === arr[index + 1].charCodeAt()
				: true
		);

console.log(solve('abc'));
console.log(solve('abd'));
console.log(solve('dabc'));
console.log(solve('abbc'));
