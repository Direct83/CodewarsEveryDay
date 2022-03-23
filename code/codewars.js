function getFirstPython(list) {
	const phytonUser = list.find((user) => user.language === 'Python');
	return phytonUser
		? `${phytonUser.firstName}, ${phytonUser.country}`
		: 'There will be no Python developers';
}
