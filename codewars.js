function meeting(s) {
	const arr = s.toUpperCase().split(/:|;/g);
	return [...Array(arr.length / 2)]
		.map((el) => arr.splice(0, 2).reverse())
		.sort()
		.map((el) => `(${el[0]}, ${el[1]})`)
		.join('');
}
console.log(
	meeting(
		'Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn'
	)
);
console.log(
	meeting(
		'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill'
	)
);
