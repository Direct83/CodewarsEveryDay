const remove = (string) =>
	string
		.split(' ')
		.map((el) => el.replace(/!*$/g, ''))
		.join(' ');

console.log(remove('!!!Hi !!hi!!! !hi'));
