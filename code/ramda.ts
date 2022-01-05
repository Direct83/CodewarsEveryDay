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
