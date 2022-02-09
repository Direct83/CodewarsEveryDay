const makeString = (string) =>
	string
		.split(' ')
		.map((word) => word[0])
		.join('');
