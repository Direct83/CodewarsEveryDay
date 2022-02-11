const lastDigit = (n, d) => [...String(n)].splice(-d, d).map(Number);
