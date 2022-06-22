function findScreenHeight(w, h) {
	const [horizontal, vertical] = h.split(':');
	return `${w}x${w * (vertical / horizontal)}`;
}

console.log(findScreenHeight(1024, '4:3'));
