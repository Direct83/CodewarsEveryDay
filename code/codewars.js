const reverse = (number) =>
	Math.sign(number) * [...String(Math.abs(number))].reverse().join('');

console.log(reverse(-423)); // -324

const isWalidWalk = (walk) =>
	walk.length + 1 !== 10 &&
	walk.reduce((acc, el, index) => {
		acc[el] = ++acc[el] || 1;
		return index === walk.length - 1 ? acc.n === acc.s && acc.w === acc.e : acc;
	}, {});

console.log(isWalidWalk(['n', 's', 'w', 'e', 'n', 's', 'n', 's', 'w', 'e'])); // true
