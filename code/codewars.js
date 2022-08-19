const collatz = (n) => (n > 1 ? 1 + collatz(n % 2 ? n * 3 + 1 : n / 2) : 1);

console.log(collatz(20));
