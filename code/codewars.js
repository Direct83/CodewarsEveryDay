const hydrate = (s) => {
	const count = s.match(/\d/g).reduce((acc, el) => acc + Number(el), 0);
	const isPlural = count !== 1 ? 'es' : '';
	return `${count} glass${isPlural} of water`;
};

console.log(hydrate('2 glasses of wine and 1 shot')); // 3 glasses of water
console.log(hydrate('1 beer')); // 1 glass of water
