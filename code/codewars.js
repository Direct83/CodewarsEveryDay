const covfefe = (str) =>
	str.includes('coverage')
		? str.replace(/(coverage)/g, 'covfefe')
		: str + ' covfefe';

console.log(
	covfefe(
		'1xhd 1gap 1yv8coveragefxgj e9hh9coverage6w032 klobcoverage68mlf rtss'
	)
);
