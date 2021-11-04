const solve = (arr) => arr.find((el) => !arr.includes(-el));

console.log(solve([1, -1, 2, -2, 3])); // 3
console.log(solve([-3, 1, 2, 3, -1, -4, -2])); // -4
