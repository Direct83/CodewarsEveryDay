const solution = (string, limit) =>
	string.slice(0, limit) + (string.length <= limit ? '' : '...');

console.log(solution('Testing String', 3));
console.log(solution('Testing String', 8));
console.log(solution('Test', 4));
