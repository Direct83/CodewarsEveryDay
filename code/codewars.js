const solve = (s) =>
	Object.values(
		[...s].reduce((acc, el) => {
			if (/[A-Z]/.test(el)) {
				acc[1] = ++acc[1] || 1;
			}
			if (/[a-z]/.test(el)) {
				acc[2] = ++acc[2] || 1;
			}
			if (/[0-9]/.test(el)) {
				acc[3] = ++acc[3] || 1;
			}
			if (/[^\w]/.test(el)) {
				acc[4] = ++acc[4] || 1;
			}
			return acc;
		}, {})
	);

console.log(solve('!@#$AAAaaaaa12'));
