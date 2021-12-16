const solve = (s) =>
	s.split(/[^aeiou]/).reduce((s, n) => Math.max(s, n.length), 0);

console.log(solve('iiihoovaeaaaoougjyaw')); // 8
