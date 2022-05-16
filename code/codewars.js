const tripleX = (str) => /^[^x]*xxx/.test(str);

// const tripleX = (str) =>
// 	[...str].reduce(
// 		(acc, el, index, arr) => {
// 			if (el === 'x' && !acc.stop) {
// 				acc.stop = true;
// 				if (arr[index + 1] === 'x' && arr[index + 2] === 'x') {
// 					acc.result = true;
// 				}
// 			}

// 			return arr.length - 1 === index ? acc.result : acc;
// 		},
// 		{ result: false, stop: false }
// 	);

console.log(tripleX('abraxxxas'));
console.log(tripleX('softx kitty, warm kitty, xxxxx'));
console.log(tripleX('kittyxxwarm'));
