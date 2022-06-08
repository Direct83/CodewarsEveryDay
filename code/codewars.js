function nextHappyYear(year) {
	let result = 0;
	for (let i = year + 1; ; i++) {
		if ([...new Set(('' + i).split(''))].length === 4) {
			result = i;
			break;
		}
	}
	return result;
}

console.log(nextHappyYear(1001));
