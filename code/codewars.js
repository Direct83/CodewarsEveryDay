function whatday(num) {
	const weekday = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	return weekday[num - 1] || 'Wrong, please enter a number between 1 and 7';
}

console.log(whatday(1));
