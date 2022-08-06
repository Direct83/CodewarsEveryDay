const gordon = (a) =>
	a
		.toUpperCase()
		.replace(/\w+/g, '$&!!!!')
		.replace(/[AEIOU]/g, (v) => (v == 'A' ? '@' : '*'));

console.log(gordon('What feck damn cake'));
console.log(gordon('are you stu pid'));
console.log(gordon('i am a chef'));
