function toLeetSpeak(str) {
	const translation = {
		A: '@',
		B: '8',
		C: '(',
		E: '3',
		G: '6',
		H: '#',
		I: '!',
		L: '1',
		O: '0',
		S: '$',
		T: '7',
		Z: '2',
	};

	return [...str].reduce((acc, el) => acc + (translation[el] || el), '');
}
console.log(toLeetSpeak('LEET')); // "1337"
