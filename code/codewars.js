const digitize = (n) => [...String(n)].map(Number);

console.log(digitize(8675309)); // [8,6,7,5,3,0,9]
