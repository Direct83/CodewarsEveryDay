const getIssuer = (number) => {
	const str = String(number);

	if (/^3[4|7]\d{13}$/.test(str)) {
		return 'AMEX';
	}

	if (/^6011\d{12}$/.test(str)) {
		return 'Discover';
	}

	if (/^5[1-5]\d{14}$/.test(str)) {
		return 'Mastercard';
	}

	if (/^4(\d{12}|\d{15})$/.test(str)) {
		return 'VISA';
	}

	return 'Unknown';
};

console.log(getIssuer(4111111111111111));
console.log(getIssuer(378282246310005));
console.log(getIssuer(9111111111111111));
