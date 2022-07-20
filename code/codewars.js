function spoonerize(words) {
	const [one, two] = words.split(' ');
	return `${two[0] + one.slice(1)} ${one[0] + two.slice(1)}`;
}
console.log(spoonerize('nit picking'));
