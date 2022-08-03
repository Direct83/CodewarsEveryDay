function freqSeq(str, sep) {
	const count = [...str].reduce(
		(acc, el) => (acc[el] = ++acc[el] || 1) && acc,
		{}
	);
	return [...str.replace(/./g, (x) => count[x])].join(sep);
}

console.log(freqSeq('hello world', '-'));
