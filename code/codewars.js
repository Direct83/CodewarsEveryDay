function meeting(x) {
	const index = x.findIndex((el) => el === 'O');
	return index > -1 ? index : 'None available!';
}

console.log(meeting(['X', 'O', 'X']));
console.log(meeting(['X', 'X', 'X', 'X', 'X']));
