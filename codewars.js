const halvingSum = (n) => n ? n + halvingSum(Math.floor(n/2)) : 0

console.log(halvingSum(25))
