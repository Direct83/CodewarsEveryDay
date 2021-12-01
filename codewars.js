const removeRotten = (bagOfFruits) =>
	!bagOfFruits
		? []
		: bagOfFruits.reduce((acc, el) => {
				const word = el.replace(/(rotten)/g, '').toLowerCase();
				return acc.concat(word);
		  }, []);

console.log(
	removeRotten([
		'rottenApple',
		'rottenBanana',
		'rottenApple',
		'rottenPineapple',
		'rottenKiwi',
	])
);
