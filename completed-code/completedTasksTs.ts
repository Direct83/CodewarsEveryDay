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

// const betweenMarkers = (line: string, left: string, right: string) =>
// 	line.slice(line.indexOf(left) + 1, line.indexOf(right));

// console.log('Example:');
// console.log(betweenMarkers('What is >apple<', '>', '<')); // 'apple'
// console.log(betweenMarkers('What is [apple]', '[', ']')); // apple

// const betweenMarkers = (line: string, left: string, right: string) =>
// 	line.slice(line.indexOf(left) + 1, line.indexOf(right));

// console.log('Example:');
// console.log(betweenMarkers('What is >apple<', '>', '<')); // 'apple'
// console.log(betweenMarkers('What is [apple]', '[', ']')); // apple

// function correctSentence(text: string): string {
// 	return text[0].toUpperCase() + text.slice(1).replace(/\./g, '') + '.';
// }

// console.log('Example2:');
// console.log(correctSentence('greetings, friends')); // 'Greetings, friends.'
// console.log(correctSentence('Greetings, friends')); // 'Greetings, friends.'
// console.log(correctSentence('Greetings, friends.')); // 'Greetings, friends.'
// console.log(correctSentence('hi.')); // 'Hi.'

// function isEven(num: number): boolean {
// 	return !(num % 2);
// }

// console.log('Example3:');
// console.log(isEven(4));

// function sumNumbers(test: string): number {
// 	// your code here
// 	return (
// 		test.match(/(\s|^)\d+(\s|$)/g)?.reduce((acc, el) => acc + Number(el), 0) ||
// 		0
// 	);
// }

// console.log('Example:');
// console.log(sumNumbers('my 1st is')); // 0
// console.log(sumNumbers('my numbers is 2')); // 2
// console.log(sumNumbers('5 plus 6 is')); // 11

// function threeWords(text: string): boolean {
// 	return /[a-z]+ [a-z]+ [a-z]+/i.test(text);
// }

// console.log('Example:');
// console.log(threeWords('Hello World hello')); // true
// console.log(threeWords('start 5 one two three 7 end')); // true
// console.log(threeWords('start 5 1 one three 7 end')); // false
// console.log(threeWords('bla bla bla bla')); // true

// function firstWord(text: string): any {
// 	return text.match(/[a-z']+/gi)[0];
// }

// console.log('Example:');
// console.log(firstWord('Hello world')); // Hello
// console.log(firstWord('... and so on ...')); // 'and
// console.log(firstWord("don't touch it")); // don't
// console.log(firstWord('greetings, friends')); // greetings

// function countDigits(text: string): number {
// 	return text.match(/\d/g)?.length || 0;
// }

// console.log('Example:');
// console.log(countDigits('hi')); // 0
// console.log(
// 	countDigits(
// 		'This picture is an oil on canvas ' +
// 			'painting by Danish artist Anna ' +
// 			'Petersen between 1845 and 1910 year'
// 	)
// ); // 8

// function backwardStringByWord(text: string): string {
// 	return text.replace(/\w+/g, (el) => [...el].reverse().join(''));
// }

// console.log('Example:');
// console.log(backwardStringByWord(''));
// console.log(backwardStringByWord('welcome to a game')) // 'emoclew ot a emag'

// interface Stock {
// 	name: string;
// 	price: number;
// }

// function biggerPrice(limit: number, data: Stock[]): Stock[] {
// 	return data.sort((a, b) => b.price - a.price).slice(0, limit);
// }

// console.log('Example:');
// console.log(
// 	biggerPrice(2, [
// 		{ name: 'bread', price: 100 },
// 		{ name: 'wine', price: 138 },
// 		{ name: 'meat', price: 15 },
// 		{ name: 'water', price: 1 },
// 	])
// );
// // [{"name": "bread", "price": 100},
// //{"name": "wine", "price": 138},]

// const betweenMarkers = (text, begin, end) => {
// 	const first = text.indexOf(begin);
// 	const second = text.indexOf(end);
// 	if (first < 0 && second >= 0) {
// 		return text.slice(0, second);
// 	}
// 	if (second < 0 && first >= 0) {
// 		return text.slice(first + begin.length);
// 	}
// 	if (first > second) {
// 		return '';
// 	}
// 	if (first < 0 && second < 0) {
// 		return text;
// 	}
// 	return text.slice(first + begin.length, second);
// };

// console.log('Example:');
// console.log(betweenMarkers('What is >apple<', '>', '<')); // 'apple'
// console.log(betweenMarkers('No[/b] hi', '[b]', '[/b]')); // No
// console.log(
// 	betweenMarkers(
// 		'<head><title>My new site</title></head>',
// 		'<title>',
// 		'</title>'
// 	)
// ); // 'My new site'
// console.log(betweenMarkers('No <hi>', '>', '<')); // ''
// console.log(betweenMarkers('No [b]hi', '[b]', '[/b]')); // 'hi'
// console.log(betweenMarkers('No hi', '[b]', '[/b]')); // 'No hi'

// function nonUniqueElements(data: number[]): number[] {
// 	return data.filter((x) => data.lastIndexOf(x) != data.indexOf(x));
// }

// console.log('Example:');
// console.log(nonUniqueElements([1, 2, 3, 1, 3])); // [1, 3, 1, 3]

// function popularWords(text: string, words: string[]) {
// 	const arrayWords = text.toLowerCase().split(/\s|\n/);
// 	return words.reduce((acc, el) => {
// 		acc[el] = arrayWords.filter((elFilter) => elFilter === el).length;
// 		return acc;
// 	}, {});
// }

// console.log('Example:');
// console.log(
// 	popularWords(
// 		`
// When I was One
// I had just begun
// When I was Two
// I was nearly new`,
// 		['i', 'was', 'three', 'near']
// 	)
// );

// function secondIndex(text: string, symbol: string): number | undefined {
// 	const pos1 = text.indexOf(symbol);
// 	const pos2 = text.indexOf(symbol, pos1 + 1);

// 	return pos2 - pos1 > 0 ? pos2 : undefined;
// }

// console.log('Example');
// console.log(secondIndex('sims', 's')); // 3
// console.log(secondIndex('find the river', 'e')); //12
// console.log(secondIndex('hi mr Mayor', ' ')); // 5
// console.log(secondIndex('hi', ' ')); // undefined
// console.log(secondIndex('hi mayor', ' ')); // undefined
// console.log(secondIndex('see you', 'e')); // 2

// sort
// function frequencySort(items: Array<string | number>): Array<string | number> {
// 	const count = items.reduce((acc, el) => {
// 		acc[el] = ++acc[el] || 1;
// 		return acc;
// 	}, {});
// 	return items.sort((a, b) =>
// 		count[a] !== count[b]
// 			? count[b] - count[a]
// 			: items.indexOf(a) - items.indexOf(b)
// 	);
// }
// console.log('Example:');
// console.log(frequencySort([4, 6, 2, 2, 6, 4, 4, 4])); // [4, 4, 4, 4, 6, 6, 2, 2]
// console.log(frequencySort(['bob', 'bob', 'carl', 'alex', 'bob'])); // ['bob', 'bob', 'bob', 'carl', 'alex']
// console.log(frequencySort([4, 6, 2, 2, 2, 6, 4, 4, 4])); // [4,4,4,4,2,2,2,6,6]
// console.log(frequencySort([1, 2, 2, 1])); // [1,1,2,2]

// function splitList(values: number[]): number[][] {
// 	return [
// 		values.slice(0, Math.round(values.length / 2)),
// 		values.slice(Math.round(values.length / 2)),
// 	];
// }

// console.log('Example:');
// console.log(splitList([1, 2, 3, 4, 5, 6])); // [[1, 2, 3], [4, 5, 6]]
// console.log(splitList([1, 2, 3])); // [[1, 2], [3]]
// console.log(splitList([1])); // [[1], []])
// console.log(splitList([])); // [[], []]

// function absoluteSorting(values: number[]): number[] {
// 	return values.sort((a, b) => Math.abs(a) - Math.abs(b));
// }

// console.log('Example:');
// console.log(absoluteSorting([-20, -5, 10, 15])); // [ -5, 10, 15, -20]
// absoluteSorting([1, 2, 3, 0]); // [0, 1, 2, 3]

// function goesAfter(word: string, first: string, second: string): boolean {
// 	const indexSecond = word.indexOf(second);
// 	return !![...word].find(
// 		(el, index, arr) =>
// 			el === first && arr[index + 1] === second && index + 1 === indexSecond
// 	);
// }

// console.log('Example:');
// console.log(goesAfter('world', 'w', 'o')); // true
// console.log(goesAfter('world', 'w', 'r')); // false
// console.log(goesAfter('almaz', 'm', 'a')); // false

// function timeConverter(dayTime) {
// 	const hour = Number(dayTime.slice(0, 2));
// 	return hour > 12
// 		? `${hour - 12}${dayTime.slice(2)} p.m.`
// 		: hour === 12
// 		? `${hour}${dayTime.slice(2)} p.m.`
// 		: hour === 0
// 		? `${hour + 12}${dayTime.slice(2)} a.m.`
// 		: `${hour}${dayTime.slice(2)} a.m.`;
// }

// console.log('Example:');
// console.log(timeConverter('12:30')); // '0:30 p.m.'
// console.log(timeConverter('09:00')); // '9:00 a.m.'
// console.log(timeConverter('23:15')); // '11:15 p.m.'
// console.log(timeConverter('00:30')); // 12:30 p.m.
// console.log(timeConverter('00:00')); // 12:00 a.m.

// function sumByTypes(values: Array<number | string>): [string, number] {
// 	return values.reduce(
// 		(acc, el) => {
// 			if (typeof el === 'number') {
// 				acc[1] += el;
// 			} else {
// 				acc[0] += el;
// 			}
// 			return acc;
// 		},
// 		['', 0]
// 	);
// }
// console.log(sumByTypes(['size', 12, 'in', 45, 0])); // ['sizein', 57]

// function translate(text: string): any {
// 	return [...text]
// 		.map((el, index, arr) =>
// 			/[aeiouy]/.test(el) && !/[aeiouy]/.test(arr[index - 1]) ? '' : el
// 		)
// 		.join('')
// 		.replace(/a+|e+|i+|o+|u+|y+/g, (x) =>
// 			x.length <= 3 ? x[0] : x[0].repeat(Math.ceil(x.length / 3))
// 		);
// }

// console.log(translate('hieeelalaooo')); //'hello'
// console.log(translate('hoooowe yyyooouuu duoooiiine')); //how you doin'
// console.log(translate('aaa bo cy da eee fe')); //'a b c d e f'
// console.log(translate('sooooso aaaaaaaaa')); // 'sos aaa'

// type Reservation = {
// 	from?: Date;
// 	to?: Date;
// 	destination: string;
// };
// type Reserve = {
// 	(from: Date, to: Date, destination: string): Reservation;
// 	(from: Date, destination: string): Reservation;
// 	(destination: string): Reservation;
// };

// const reserve: Reserve = (
// 	fromOfDestination: Date | string,
// 	toOrDestination?: Date | string,
// 	destination?: string
// ) => {
// 	if (toOrDestination instanceof Date && fromOfDestination instanceof Date) {
// 		return {
// 			from: fromOfDestination,
// 			to: toOrDestination,
// 			destination: destination,
// 		};
// 	}
// 	if (
// 		typeof toOrDestination === 'string' &&
// 		fromOfDestination instanceof Date
// 	) {
// 		return {
// 			from: fromOfDestination,
// 			destination: toOrDestination,
// 		};
// 	}
// 	if (typeof fromOfDestination === 'string') {
// 		return {
// 			destination: fromOfDestination,
// 		};
// 	}
// };

// function call<T extends [unknown, string], R>(
// 	f: (...args: T) => R,
// 	...args: T
// ): R {
// 	return f(...args);
// }
// function fill(length: number, value: string): string[] {
// 	return [...Array(length)].map((_) => value);
// }
// console.log(call(fill, 10, 'a')); // вычисляется как массив 10и 'a'

// import fetch from 'node-fetch';

// const todosIds = [3, 1, 2];
// const arrayFetchTodos = todosIds.map((number) => {
// 	return fetch(`https://jsonplaceholder.typicode.com/todos/${number}`).then((response) => response.json());
// });

// const promiseAllTest = (arr: Promise<any>[]): Promise<any[]> =>
// 	arr.reduce((acc, cur) => acc.then((data) => cur.then((curData) => [...data, curData])), Promise.resolve([]));

// (async () => {
// 	const response = await promiseAllTest(arrayFetchTodos);
// 	console.log(response);
// })();

// interface ITest {
// 	zain: string;
// 	name?: string;
// }

// const test: Required<ITest> = {
// 	zain: 'b',
// };
