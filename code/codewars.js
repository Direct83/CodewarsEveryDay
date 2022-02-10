const giveMeFive = (obj) =>
	Object.entries(obj).reduce((acc, el) => {
		if (el[0].length === 5) {
			acc = acc.concat(el[0]);
		}
		if (el[1].length === 5) {
			acc = acc.concat(el[1]);
		}
		return acc;
	}, []);

function palindrome(num) {
	if (typeof num === 'string' || num < 0) {
		return 'Not valid';
	}
	return [...String(num)].reverse().join('') === String(num);
}
