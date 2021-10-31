const automorphic = (n) =>
	RegExp(`${n}$`).test(n ** 2) ? 'Automorphic' : 'Not!!';

console.log(automorphic(76));
