import { SourceMap } from 'module';
import {
	pipe,
	ascend,
	last,
	split,
	sort,
	length,
	filter,
	whereEq,
	always,
	equals,
	cond,
	T,
	subtract,
	add,
	match,
	trim,
	join,
	map,
	square,
	partial,
	addIndex,
	flip,
	inc,
	modulo,
	aperture,
	compose,
	converge,
	sum,
	divide,
	apply,
	juxt,
	lift,
	assoc,
	assocPath,
	splitEvery,
	toString,
	either,
	sortWith,
	is,
	identity,
	adjust,
	range,
	countBy,
	toLower,
	uniq,
	values,
} from 'ramda';

// const longestWord = pipe(split` `, sort(ascend(length)), last);

// console.log(longestWord('red blue grey'));

// const arr = [{ complete: false }, { complete: true }, { complete: false }, { complete: true }];

// const incomplete = filter(whereEq({ complete: false }));

// console.log(incomplete(arr));

// const fn = cond([
// 	[equals(0), always('water freezes at 0°C')],
// 	[() => undefined, always('water boils at 100°C')],
// 	[T, (temp) => 'nothing special happens at ' + temp + '°C'],
// ])(5);

// console.log(fn);

// const lastFun = pipe(split` `, sort(ascend(last)));

// console.log(lastFun('take me to semynak')); // ['take', 'me', 'semynak', 'to']

// console.log(map((x) => x + x, [4, 8]));

// console.log(equals([1, 2, 3], [1, 2, 3]));
// console.log(equals([1, 3, 2], [1, 2, 3]));
// const a = {
// 	a: 1,
// 	b: 2,
// };
// const b = {
// 	b: 2,
// 	a: 1,
// };
// console.log(equals(a, b));

// const sayHelloToMs = partial((x, y, g) => x + ' ' + y + ' ' + g + '!', ['Hello, Ms.']);
// console.log(sayHelloToMs('Jane', 'Jones')); //=> 'Hello, Ms. Jane Jones!'
/***************************************************************/
// const increment = (numbers) => numbers.map((number, index) => (++index + number) % 10);
// const sumWithIndex = pipe(add, inc, flip(modulo)(10));
// const increment = addIndex(map)(sumWithIndex);

// console.log(increment([4, 6, 7, 1, 3])); // [ 5, 8, 0, 5, 8 ]
/***************************************************************/
// function digitsAverage(input) {
// 	if (input < 10) {
// 		return input;
// 	}
// 	while (input > 9) {
// 		input = String(input);
// 		let array = [];
// 		for (let i = 0; i < input.length - 1; i++) {
// 			array.push(Math.round((+input[i] + +input[i + 1]) / 2));
// 		}
// 		input = +array.join('');
// 	}
// 	return input;
// }
// function digitsAverage(input) {
// 	const foo = pipe(aperture(2), map(converge(divide, [sum, length])));
// 	let numbers = [...String(input)].map(Number);
// 	while (numbers.length > 1) {
// 		numbers = foo(numbers);
// 	}
// 	return numbers[0];
// }

// console.log(digitsAverage(246)); // 4
/***************************************************************/
// const reOrdering = (text) => text.replace(/(.+) ([A-Z]\w*)/, `$2 $1`);

// const reOrdering = require('ramda').replace(/(.+) ([A-Z]\w*)/)(`$2 $1`);

// console.log(reOrdering('ming Yao'));
// console.log(reOrdering('bull color pig Patrick'));

/***************************************************************/

// const obj = {
// 	a: {
// 		d: 3,
// 	},
// 	c: 1,
// };

// console.log(assocPath(['a', 'b'], 2, obj));

/***************************************************************/
// const sumOfIntegersInString = (s) =>
// 	s.split(/[^0-9]/).reduce((acc, number) => acc + Number(number), 0);
// const sumOfIntegersInString = pipe(match(/\d+/g), sum);

// console.log(sumOfIntegersInString('12.4'));
/***************************************************************/

// const digitize = (n) => [...String(n)].map(Number);
// const digitize = pipe(toString, splitEvery(1), map(Number));

// console.log(digitize(8675309)); // [8,6,7,5,3,0,9]

/***************************************************************/
// const dbSort = (array) =>
// 	array.sort(
// 		(a, b) =>
// 			(typeof a === 'string') - (typeof b === 'string') || (a > b) - (a < b)
// 	);
// const dbSort = sortWith([ascend(is(String)), ascend(identity)]);

// console.log(
// 	dbSort(['Apple', 46, '287', 574, 'Peach', '3', '69', 78, 'Grape', '423'])
// );
// /***************************************************************/

// console.log(pipe(assoc('a', 2), assoc('b', 3))({ a: 1 }));
// const generateIntegers = (m, n) =>
// 	[...Array(n - m + 1)].map((_, index) => index + m);

// const generateIntegers = pipe(Array, adjust(inc, 1), apply(range));
// /***************************************************************/

// const validateWord = (string) =>
// 	[...string.toLowerCase()].reduce((acc, symbol, index, arr) => {
// 		acc[symbol] = ++acc[symbol] || 1;
// 		if (index === arr.length - 1) {
// 			const values = Object.values(acc);
// 			return values.every((el) => el === values[0]);
// 		}
// 		return acc;
// 	}, {});

// const validateWord = pipe(countBy(toLower), values, uniq, length, equals(1));

// console.log(validateWord('Abcabc'));

// /***************************************************************/
