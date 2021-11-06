function add(n) {
	return function Add(b) {
		return n + b;
	};
}

console.log(add(1)(3)); // 4
