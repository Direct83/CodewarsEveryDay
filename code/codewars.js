function infected(s) {
	const total = s.replace(/X/g, '').length;
	const infected = s
		.split('X')
		.filter((i) => i.includes(1))
		.join('').length;
	const percentage = (100 * infected) / total;
	return percentage || 0;
}

console.log(infected('01000000X000X011X0X'));
