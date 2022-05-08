const crap = (x, bags, cap) =>
	x.flat(1).includes('D')
		? 'Dog!!'
		: bags * cap - x.flat(1).filter((el) => el === '@').length > 0
		? 'Clean'
		: 'Cr@p';

console.log(
	crap(
		[
			['_', '_', '_', '_'],
			['_', '_', '_', '@'],
			['_', '_', '@', '_'],
		],
		2,
		2
	)
);

console.log(
	crap(
		[
			['_', '_', '_', '_'],
			['_', '_', '_', '@'],
			['_', '_', '@', '_'],
		],
		1,
		1
	)
);

console.log(
	crap(
		[
			['_', '_'],
			['_', '@'],
			['D', '_'],
		],
		2,
		2
	)
);
