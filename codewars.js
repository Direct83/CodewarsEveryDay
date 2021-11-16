const encode = (str, num) =>
	[...str].map(
		(el, i) =>
			el.charCodeAt(0) - 96 + Number(String(num)[i % String(num).length])
	);

console.log(encode('scout', 1939)); // [ 20, 12, 18, 30, 21]
