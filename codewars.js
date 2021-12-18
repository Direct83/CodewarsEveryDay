const greetDevelopers = (list) =>
	list.map((el) => ({ ...el, greeting: `Hi ${el.firstName}, what do you like the most about ${el.language}?` }));

const getHiddenCard = (cardNumber, starsCount = 4) =>
	cardNumber.replace(new RegExp(`.{${cardNumber.length - starsCount}}`), '*'.repeat(starsCount));

console.log(getHiddenCard('1234567812345678'));
