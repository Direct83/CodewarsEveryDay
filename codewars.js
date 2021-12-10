function addUsername(list) {
	return list.map((el) => {
		return {
			...el,
			username:
				el.firstName.toLowerCase() +
				el.lastName.slice(0, 1).toLowerCase() +
				(Date.prototype.getFullYear() - el.age).toString(),
		};
	});
}
