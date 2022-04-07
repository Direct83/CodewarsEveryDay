const specialNumber = (n) => (/[6-9]/.test(n) ? 'NOT!!' : 'Special!!');

console.log(specialNumber(2));
console.log(specialNumber(92));
console.log(specialNumber(2783));
