const getAverage = (marks) =>
	Math.floor(marks.reduce((acc, number) => acc + number, 0) / marks.length);
