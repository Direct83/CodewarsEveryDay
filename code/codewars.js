const nicknameGenerator = (name) =>
	(name.length <= 3 && 'Error: Name too short') ||
	(/[aeiou]/.test(name[2]) ? name.slice(0, 4) : name.slice(0, 3));

console.log(nicknameGenerator('Robert')); //=> "Rob"
console.log(nicknameGenerator('Kimberly')); //=> "Kim"
console.log(nicknameGenerator('Samantha')); //=> "Sam"
console.log(nicknameGenerator('Jeannie')); //=> "Jean"
console.log(nicknameGenerator('Douglas')); //=> "Doug"
console.log(nicknameGenerator('Gregory')); //=> "Greg"
console.log(nicknameGenerator('Sam'));
