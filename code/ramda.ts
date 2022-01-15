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

const reOrdering = require('ramda').replace(/(.+) ([A-Z]\w*)/)(`$2 $1`);

console.log(reOrdering('ming Yao'));
console.log(reOrdering('bull color pig Patrick'));

/***************************************************************/