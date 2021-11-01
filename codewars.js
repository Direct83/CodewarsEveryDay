const multiplyAll = (arr) => (n) => arr.map((x) => n * x);

console.log(multiplyAll([1, 2, 3])(1)); // [1, 2, 3]
console.log(multiplyAll([1, 2, 3])(2)); // [2, 4, 6]
