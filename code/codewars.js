String.prototype.vowel = function () {
	return /^[aeiou]$/i.test(this);
};

console.log('E'.vowel()); // true
console.log('lol'.vowel()); // false
