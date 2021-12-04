const multiples = (m, n) => [...Array(m)].map((_, index) => (index + 1) * n);

console.log(multiples(3, 5));
