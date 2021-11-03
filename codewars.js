const generateShape = (integer) =>
	[...Array(integer)].map((_) => '+'.repeat(integer)).join('\n');

console.log(generateShape(8)); // '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++'
