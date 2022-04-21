const check = (str) => (/^[a-z]+$/gi.test(str || '') ? str : '');
const calc = (s) =>
	[...s.toUpperCase()].reduce((acc, symbol) => acc + symbol.charCodeAt(), 0);
const compare = (s1, s2) => calc(check(s1)) === calc(check(s2));

console.log(compare('AD', 'BC'));
console.log(compare('gf', 'FG'));
console.log(compare('AD', 'DD'));
console.log(compare('zz1', ''));
