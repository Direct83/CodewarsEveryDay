function timeCorrect(timestring) {
	const date = new Date();

	if (timestring == '') {
		return timestring;
	}

	if (!/\d\d:\d\d:\d\d/.test(timestring)) {
		return null;
	}

	date.setUTCHours(...timestring.split(':'));
	return date.toLocaleTimeString('en', { hour12: false });
}

console.log(timeCorrect('09:10:01'));
console.log(timeCorrect('11:70:10'));
console.log(timeCorrect('001122'));
console.log(timeCorrect(''));
console.log(timeCorrect(null));
