function well(x) {
	const ideas = x.reduce((acc, el) => {
		el.forEach(
			(idea) => String(idea).toLowerCase() === 'good' && (acc = acc + 1)
		);
		return acc;
	}, 0);

	if (ideas === 0) {
		return 'Fail!';
	}
	return ideas <= 2 ? 'Publish!' : 'I smell a series!';
}

console.log(
	well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']])
);
console.log(
	well([
		[
			['bad', 8, 6],
			['bAd', 'six', 'cheat'],
			['bAd', 'bAd', 3, 8],
		],
	])
);
