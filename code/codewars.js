const firstSlash = '/';
const rest = '/str/number'.slice(1);

console.log(firstSlash + rest.slice(0, rest.indexOf('/')));

const solve = (str) => {
	const symbols = [...str].filter((symbol) => symbol !== ' ');
	return str.replace(/\S/g, (_) => symbols.pop());
};

console.log(solve('i love codewars')); // s rawe docevoli
