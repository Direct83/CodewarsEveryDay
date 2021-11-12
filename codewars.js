const greet = (name) =>
	`Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;

console.log(greet('riley')); // 'Hello Riley!'
console.log(greet('BILLY')); // 'Hello Billy!'
