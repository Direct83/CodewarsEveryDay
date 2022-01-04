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

const lastFun = pipe(split` `, sort(ascend(last)));

console.log(lastFun('take me to semynak')); // ['take', 'me', 'semynak', 'to']
