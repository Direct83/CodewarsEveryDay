function bandNameGenerator(str) {
	const isSame = str[0] === str[str.length - 1];
	const upSlice = str[0].toUpperCase() + str.slice(1);
	return isSame ? upSlice + str.slice(1) : 'The ' + upSlice;
}

console.log(bandNameGenerator('knife'));
