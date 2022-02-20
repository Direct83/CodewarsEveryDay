const searchNames = (logins) =>
	logins.filter((login) => login[0].endsWith('_'));

console.log(
	searchNames([
		['f_o_o', 'foo@foo.com'],
		['bar_', 'bar@bar.com'],
		['b_a_r_', 'foobar@fb.com'],
		['_barfoot', 'bar_foot@fb.com'],
		['_barfoot_', 'bar_foo@fb.com'],
	])
);
