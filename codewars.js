const hasUniqueChars = (str) => new Set(str).size === str.length;

console.log(hasUniqueChars('  nAa')); // false
console.log(hasUniqueChars('abcdef')); // true
