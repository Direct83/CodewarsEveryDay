function newAvg(arr, newavg) {
	const navg = newavg * (arr.length + 1) - arr.reduce((acc, el) => acc + el, 0);
	if (navg <= 0) {
		throw 'ValueError';
	}
	return Math.ceil(navg);
}

console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90));
