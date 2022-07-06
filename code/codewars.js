const arr = [0, 1, 2, 2, 3];

Array.prototype.numberOfOccurrences = function (number) {
	return this.filter(el => el === number).length;
};

console.log(arr.numberOfOccurrences(0));
console.log(arr.numberOfOccurrences(4));
console.log(arr.numberOfOccurrences(2));
console.log(arr.numberOfOccurrences('a'));
