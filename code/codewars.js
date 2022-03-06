const Person = function () {
	const person = {
		_name: 'Leroy',
		_friends: [],
		fillFriends(friends) {
			this._friends = friends;
		},
	};
	return person;
};

