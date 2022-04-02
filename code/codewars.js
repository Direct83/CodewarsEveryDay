function outed(meet, boss) {
	const meetArray = Object.entries(meet);

	const averageRating =
		meetArray
			.map((el) => (el[0] === boss ? el[1] * 2 : el[1]))
			.reduce((acc, el) => acc + el) / meetArray.length;
	return averageRating <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}

console.log(
	outed(
		{
			tim: 0,
			jim: 2,
			randy: 0,
			sandy: 7,
			andy: 0,
			katie: 5,
			laura: 1,
			saajid: 2,
			alex: 3,
			john: 2,
			mr: 0,
		},
		'laura'
	)
);
