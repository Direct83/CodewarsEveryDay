const largestPower = (n) => (--n ? (Math.log(n) / Math.log(3)) ^ 0 : -1);

console.log(largestPower(82));
