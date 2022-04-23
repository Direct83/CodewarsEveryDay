const modifiedSum = (a, n) => a.reduce((acc, el) => acc + el ** n - el, 0);

console.log(modifiedSum([1, 2, 3], 3));
console.log(modifiedSum([1, 2], 5));
