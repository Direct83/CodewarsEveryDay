const anyArrows = (arrows) =>
	arrows.filter((arrow) => arrow['damaged']).length < arrows.length;
