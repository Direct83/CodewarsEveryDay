const moveTen = (s) =>
	[...s.toLowerCase()]
		.map((symbol) => {
			const code = symbol.charCodeAt();
			return String.fromCharCode(
				code + 10 <= 122 ? code + 10 : 97 + code + 9 - 122
			);
		})
		.join('');

console.log(moveTen('testcase'));
