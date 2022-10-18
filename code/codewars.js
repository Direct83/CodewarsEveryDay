const isFlush = (cards) =>
	cards.every((card) => cards[0].slice(-1) === card.slice(-1));
