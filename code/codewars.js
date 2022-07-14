const friends = [
	{
		username: 'David',
		status: 'online',
		lastActivity: 10,
	},
	{
		username: 'Lucy',
		status: 'offline',
		lastActivity: 22,
	},
	{
		username: 'Bob',
		status: 'online',
		lastActivity: 104,
	},
];

const friends2 = [
	{ username: 'Lucy', status: 'offline', lastActivity: 22 },
	{ username: 'Bob', status: 'online', lastActivity: 104 },
];

const whosOnline = (friends) =>
	friends.reduce((acc, el) => {
		const { status, lastActivity, username } = el;
		const { online, offline, away } = acc;
		if (status !== 'online') {
			offline ? offline.push(username) : (acc.offline = [username]);
		} else if (lastActivity > 10) {
			away ? away.push(username) : (acc.away = [username]);
		} else {
			online ? online.push(username) : (acc.online = [username]);
		}
		return acc;
	}, {});

console.log(whosOnline(friends));
console.log(whosOnline(friends2));
