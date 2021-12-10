// export const tidyNumber = (num: number) =>
// 	[...String(num)]
// 		.map(Number)
// 		.every((el, index, arr) =>
// 			el <= arr[index + 1] ? true : arr[index + 1] === undefined ? true : false
// 		);

// console.log(tidyNumber(2789)); // true

// export function isPangram(string: string) {
// 	const allLetters = 'abcdefghijklmnopqrstuvwxyz';
// 	const str = string.toLowerCase();
// 	return allLetters.split('').every((letter) => str.includes(letter));
// }

// console.log(isPangram('The quick brown fox jumps over the lazy dog.')); // true

// export function findNb(m: number) {
// 	let i = 1;
// 	let count = 0;
// 	while (m > 0) {
// 		m -= Math.pow(i, 3);
// 		i++;
// 		count++;
// 	}

// 	return m === 0 ? count : -1;
// }

// export function bouncingBall(
// 	h: number,
// 	bounce: number,
// 	window: number
// ): number {
// 	let rebounds = -1;
// 	if (bounce > 0 && bounce < 1) {
// 		while (h > window) {
// 			rebounds += 2;
// 			h *= bounce;
// 		}
// 	}
// 	return rebounds;
// }

// console.log(bouncingBall(3.0, 0.66, 1.5)); //3

// export const dashatize = (num: number) =>
// 	String(num)
// 		.replace(/([13579])/g, '-$1-')
// 		.replace(/--+/g, '-')
// 		.replace(/(^-|-$)/g, '');

// console.log(dashatize(274)); // "2-7-4"
// console.log(dashatize(86320)); // "86-3-20"
